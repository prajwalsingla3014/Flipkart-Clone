/** @format */

import { makeStyles, Menu, MenuItem, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { PowerSettingsNew } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const useStyle = makeStyles({
  component: {
    marginTop: 40,
  },
  logout: {
    marginLeft: 20,
    fontSize: 14,
  },
})

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false)
  const classes = useStyle()

  const handleClick = (event) => {
    setOpen(event.currentTarget)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const logout = () => {
    setAccount('')
  }

  return (
    <>
      <Link onClick={handleClick}>
        <Typography style={{ marginTop: 5 }}>{account}</Typography>
      </Link>
      <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        className={classes.component}
      >
        <MenuItem
          onClick={() => {
            handleClose()
            logout()
          }}
        >
          <PowerSettingsNew fontSize="small" color="primary" />
          <Typography className={classes.logout}>Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  )
}

export default Profile
