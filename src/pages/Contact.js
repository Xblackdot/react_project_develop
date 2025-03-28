import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
        <Box sx={{my: 5, ml: 10, '& h4':{fontWeight: 'bold', mb: 2}}}>
         <Typography variant='h4'>
          Contact My Resturant
          </Typography> 
          <p>
          We are available to take requests, orders,
          or deliveries during our regular business hours
          </p>
        </Box>
        <Box sx={{m:3, width: '600px', ml:10, '@media (max-width:600px)':{
          width:'300px',
        },
        }}>
        <TableContainer component={Paper}>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black',  color:'white'}} align= 'center'>Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{color:'red', pt: 1}}/> 1800-00-0135 (Tollfree)
                  </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                  <MailOutlineIcon sx={{color:'skyblue', pt: 1}}/> helpdesk@foodym.com 
                  </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                  <CallIcon sx={{color:'green', pt: 1}}/> +91 8259648521 
                  </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        </Box>
    </Layout>
  )
}

export default Contact
