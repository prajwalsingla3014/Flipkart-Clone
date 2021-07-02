/** @format */

import { Badge, Box, Button, makeStyles, Typography } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import { ShoppingCart } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import LoginDialog from '../login/LoginDialog'
import { LoginContext } from '../../context/ContextProvider'
import Profile from './Profile'
import { useSelector } from 'react-redux'

const useStyle = makeStyles((theme) => ({
  container: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  wrapper: {
    margin: '0 5% 0 auto',
    display: 'flex',
    '& > *': {
      marginRight: 50,
      textDecoration: 'none',
      color: '#FFFFFF',
      fontSize: 12,
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        color: '#2874f0',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 10,
      },
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  login: {
    color: '#2874f0',
    background: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 600,
    borderRadius: 2,
    padding: '5px 40px',
    height: 32,
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
      background: '#2874f0',
      color: '#FFFFFF',
    },
  },
}))

const HeaderButtons = () => {
  const classes = useStyle()
  const [open, setOpen] = useState(false)
  const { account, setAccount } = useContext(LoginContext)

  const cartDetails = useSelector((state) => state.cart)
  const { cartItems } = cartDetails

  const openLoginDialog = () => {
    setOpen(true)
  }

  return (
    <Box className={classes.wrapper}>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <Link>
          <Button
            variant="contained"
            onClick={() => openLoginDialog()}
            className={classes.login}
          >
            Login
          </Button>
        </Link>
      )}
      <Link>
        <Typography style={{ marginTop: 2 }}>More</Typography>
      </Link>
      <Link to="/cart" className={classes.container}>
        <Badge badgeContent={cartItems?.length} color="secondary">
          <ShoppingCart />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Link>
      <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
    </Box>
  )
}

export default HeaderButtons
