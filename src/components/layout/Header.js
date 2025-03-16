import React from 'react'
import {Box, AppBar, Typography, Toolbar, Icon, IconButton, Drawer, Divider} from '@mui/material'
//import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/HeaderStyles.css';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
const Header = () => {
  const[mobileOpen, setMbileOpen] = useState(false)
  //handle menu click
  const handleDrawerToggle = () => {
    setMbileOpen(!mobileOpen)
  }
  //menu drawer
  const drawer = (
    <Box onClick = {handleDrawerToggle} sx={{textAlign:'center'}}>
      <Typography color={'goldenrod'} variant='h6' component='div' sx={{flexGrow:1, my: 2}}>
          <DinnerDiningIcon className='flex iteam-center'/>
          F&M
          </Typography>
          <Divider/>
            <ul className='mobile-navigation'>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/menu'}>Menu</Link>
              </li>
              <li>
                <Link to={'/about'}>About</Link>
              </li>
              <li>
                <Link to={'/contact'}>Contact</Link>
              </li>
            </ul>
          
    </Box>
  )
  return (
    <>
    <Box>
      <AppBar component={'nav'} sx={{bgcolor: 'black'}}>
        <Toolbar>
          <IconButton color='inherit' aria-label='open drawer' edge='start' sx={{mr:2, display: {sm: 'none'},
        }}
        onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        <Typography color={'goldenrod'} variant='h6' component='div' sx={{flexGrow:1}}>
          <DinnerDiningIcon className='flex iteam-center'/>
          F&M
          </Typography>
          <Box sx={{display:{xs:'none', sm:'block'}}}>
            <ul className='navigation-menu'>
              <li>
                <NavLink activeClassname='active' to={'/'}>Home</NavLink >
              </li>
              <li>
                <NavLink  to={'/menu'}>Menu</NavLink >
              </li>
              <li>
                <NavLink  to={'/about'}>About</NavLink >
              </li>
              <li>
                <NavLink  to={'/contact'}>Contact</NavLink >
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component={'nav'}>
        <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle} sx={{display:{xs:'block', sm:'none'}, '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: '240px',
        }}}>
          {drawer}
        </Drawer>
      </Box>
      <Box >
      <Toolbar/>
      </Box>
    </Box>
    </>
  )
}

export default Header
