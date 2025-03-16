import React from 'react'
import Layout from '../components/layout/Layout'
import { Link } from 'react-router-dom'
import Banner from '../images/banner.jpeg'
import '../styles/HomeStyles.css';
const Home = () => {
  return (
      <Layout>
        <div className='home' style={{backgroundImage:`url(${Banner})`}}>
          <div className='headerContainer'>
            <h1>Foody Moody</h1>
            <p>Choose By Mood</p>
            <Link to='/menu'>
            <button>ORDER NOW</button>
            </Link>
          </div>
        </div>
      </Layout>
  )
}

export default Home
