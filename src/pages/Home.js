import React from 'react';
import styled from 'styled-components'
import NavList from '../components/NavList'
import NavBar from '../components/NavBar'

const Background = styled.div`
  background: url(${require('../images/galleryFR/bg.jpg')}) no-repeat center;
  background-size: cover;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 20px;
  grid-templete-rows: 1fr 3fr 1fr;

  @media (max-width: 850px) {
    background: url(${require('../images/galleryFR/bg2.jpg')}) no-repeat center;
    grid-template-columns: 1fr 3fr 1fr;
  }
`

const Home = () => (
  <Background>
    <NavBar />
    <NavList />
  </Background>
)

export default Home
