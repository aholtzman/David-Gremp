import React from 'react';
import TextWrap from '../components/TextWrap'
import styled from 'styled-components'
import Display from '../components/Display'

const HomeImage = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;

  img {
    border: 1px solid grey;
  }

  @media (max-width: 700px) {
      img {
      width: 80%;
      height: 80%;
      }
    }
  }
`

const Home = () => (
  <div>
    <Display />
    <TextWrap>
      <HomeImage>
        <img src={require('../images/gallery7879/DGR.028.jpg')} alt='Two brothers outside of library, Austin'></img>
      </HomeImage>
    </TextWrap>
  </div>
)

export default Home
