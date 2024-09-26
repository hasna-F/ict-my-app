
import { Button, Typography } from '@mui/material';
import { useState } from 'react'
import React from 'react';

const Counter = () => {
  var[a, seta] = useState("0")
  
   var Add = () => {
    seta(a+1)
  }

  var sub = () => {
    seta(a-1)
  }
  return (
    <div>
      <Typography variant='h4'>{a} </Typography>
      <Button variant='contained' onClick={Add} >+</Button>
      <Button variant='contained' onClick={sub} >-</Button>
     </div>
  )
}
export default Counter