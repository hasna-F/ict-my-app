import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import axios from 'axios';


const Pokemon = () => {
    var [user, setuser] = useState([])

    axios.get("https://dummyapi.online/api/pokemon")
        .then((respo) => {
            console.log(respo.data)
            setuser(respo.data)
        })
  return (
      <div>
          
                  <Grid container spacing={2}>
                      {user.map((val) => {
                          return (
              <Grid item xs={5}>
                  <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                          sx={{ height: 140 }}
                                  image={val.image_url}
                                  title={val.pokemon}/>
                      
                  </Card>
                      </Grid>
                      )
          })}  
             </Grid>
               
    </div>
  )
}

export default Pokemon
