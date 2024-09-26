import React, { useState } from 'react'
import { Table, TableContainer, TableCell, TableRow, TableHead, TableBody }  from '@mui/material'
import axios from 'axios'


const Api = () => {
    var [user, setuser] = useState([])

    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            console.log(response.data)
            setuser(response.data)
        })
  return (
      <div>
          <TableContainer>
              <Table>
                  <TableHead>
                  <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Username</TableCell>
                      <TableCell>City</TableCell>
                  </TableRow>
                      </TableHead>
                  <TableBody>
                      {user.map((val)=> {
                          return (
                              <TableRow>
                                  <TableCell>{val.name}</TableCell>
                                  <TableCell>{val.username}</TableCell>
                                  <TableCell>{val.address.city}</TableCell>
                              </TableRow>
                      )
                      })}
                    
                      </TableBody>
              </Table>
          </TableContainer>
    </div>
  )
}

export default Api