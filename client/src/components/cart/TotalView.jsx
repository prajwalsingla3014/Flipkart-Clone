/** @format */

import React, { useEffect, useState } from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'
import clsx from 'clsx'

const useStyle = makeStyles({
  component: {
    // width: '30%'
  },
  header: {
    padding: '15px 24px',
    background: '#fff',
  },
  greyTextColor: {
    color: '#878787',
  },
  container: {
    '& > *': {
      marginBottom: 20,
      fontSize: 14,
    },
  },
  price: {
    float: 'right',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 600,
    borderTop: '1px dashed #e0e0e0',
    padding: '20px 0',
    borderBottom: '1px dashed #e0e0e0',
  },
})

const TotalView = ({ cartItems, counter }) => {
  const classes = useStyle()

  const [price, setPrice] = useState(0)
  const [discount, setDiscount] = useState(0)
  console.log('Counter', counter)

  useEffect(() => {
    totalAmount()
  }, [cartItems])

  const totalAmount = () => {
    let price = 0,
      discount = 0
    cartItems.map((item) => {
      price += counter * item.price.mrp
      discount += counter * item.price.mrp - counter * item.price.cost
    })
    console.log('Price', price)
    setPrice(price)
    setDiscount(discount)
  }

  return (
    <Box className={classes.component}>
      <Box
        className={classes.header}
        style={{ borderBottom: '1px solid #f0f0f0' }}
      >
        <Typography className={classes.greyTextColor}>PRICE DETAILS</Typography>
      </Box>
      <Box className={clsx(classes.header, classes.container)}>
        <Typography>
          Price ({cartItems?.length} item)
          <span className={classes.price}>₹{price}</span>
        </Typography>
        <Typography>
          Discount<span className={classes.price}>-₹{discount}</span>
        </Typography>
        <Typography>
          Delivery Charges<span className={classes.price}>₹40</span>
        </Typography>
        <Typography className={classes.totalAmount}>
          Total Amount
          <span className={classes.price}>₹{price - discount + 40}</span>
        </Typography>
        <Typography style={{ fontSize: 16, color: 'green' }}>
          You will save ₹{discount - 40} on this order
        </Typography>
      </Box>
    </Box>
  )
}

export default TotalView
