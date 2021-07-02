/** @format */

import React, { useState } from 'react'
import { Button, ButtonGroup, makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
  component: {
    marginTop: 30,
  },
  button: {
    borderRadius: '50%',
  },
})

const CartButtons = ({ counter, setCounter }) => {
  const classes = useStyle()

  const handleDecrement = () => {
    setCounter((counter) => counter - 1)
  }

  const handleIncrement = () => {
    setCounter((counter) => counter + 1)
  }

  return (
    <ButtonGroup className={classes.component}>
      <Button
        onClick={() => handleDecrement()}
        disabled={counter === 0}
        className={classes.button}
      >
        -
      </Button>
      <Button>{counter}</Button>
      <Button onClick={() => handleIncrement()} className={classes.button}>
        +
      </Button>
    </ButtonGroup>
  )
}

export default CartButtons
