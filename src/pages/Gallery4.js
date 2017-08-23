import React from 'react';
import TextWrap from '../components/TextWrap'
import PhotoGallery from '../components/PhotoGallery'
import data from '../images/CC_data'
import NavBar from '../components/NavBar'

const Gallery4 = () => (
  <div>
    <NavBar />
    <TextWrap>
      <h1>Cruise Control</h1>
      <p>text here</p>
      <br></br>
      <hr></hr>
    </TextWrap>
    <PhotoGallery data={data} />
  </div>
)

export default Gallery4
