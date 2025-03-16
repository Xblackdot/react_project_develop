import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
      <Layout>
        <Box sx={{my:15, textAlign: 'center', p:2, '& h4':{
          fontWeight: 'bold',
          my:2,
          fontSize:'2rem',
        },
        '& p':{
          justifyContent: 'center',
        },
        '@media (max-width:600px)':{
          mt:0,
          '& h4':{
            fontSize: '1.2rem',
          },
        },
        }}>
          <Typography varient = 'h4'>
            Welcome To My Resturent
          </Typography>
          <p>
          Welcome to Foody Moody, your go-to solution for fast, delicious, and reliable food delivery! Our mission is simple:  
          to bring your favorite meals right to your doorstep, quickly and conveniently.
          Whether you're craving a savory pizza, a hearty burger, or a fresh salad,
          Foody Moody has you covered with a wide variety of restaurants and cuisines to choose from. With just a few taps, you can explore menus from local favorites, new hotspots, and international flavors— 
          all delivered straight to your home or office.
          </p>
          <br/>
          <p>
          Foody Moody was created with one goal in mind: to make food delivery easier, faster, and more enjoyable. We understand
          that busy schedules and a fast-paced life sometimes leave little time for cooking or dining out. That's where we come in. 
          Our platform connects you with 
          trusted restaurants, offering everything from gourmet meals to comfort food, so you can enjoy great meals without leaving your home.
          </p>
        </Box>
      </Layout>
  )
}

export default About
