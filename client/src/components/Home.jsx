/** @format */

import { Box, makeStyles } from '@material-ui/core'
import NavBar from './home/Navbar'
import Banner from './home/Banner'
import MidSlide from './home/MidSlide'
import MidSection from './home/MidSections'
import Slide from './home/Slide'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux' // hooks
import { getProducts as listProducts } from '../redux/actions/productActions'

const useStyle = makeStyles({
  component: {
    padding: 10,
    background: '#F2F2F2',
  },
})

const Home = () => {
  const classes = useStyle()

  const getProducts = useSelector((state) => state.getProducts)
  const { products, error } = getProducts

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      <NavBar />
      <Box className={classes.component}>
        <Banner />
        <MidSlide products={products} />
        <MidSection />
        <Slide
          data={products}
          title="Discounts for You"
          timer={false}
          multi={true}
        />
        <Slide
          data={products}
          title="Suggested Items"
          timer={false}
          multi={true}
        />
        <Slide
          data={products}
          title="Top Selection"
          timer={false}
          multi={true}
        />
        <Slide
          data={products}
          title="Recommended Items"
          timer={false}
          multi={true}
        />
      </Box>
    </>
  )
}

export default Home
