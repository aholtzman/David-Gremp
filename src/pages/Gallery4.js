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
      <p>These photographs were created while enjoying a series of cruises with my family between 2001 and 2004. While the cruise-vacation experience is highly efficient in allowing people to visit a wide range of destinations over a short period of time, it doesn’t provide a lot of independent exploration for a photographer. You’ve got to take what you get when you get it and stick with your cruise group, or else get left behind. It happened once to me and it wasn’t pleasant.</p>
      <p>That said, I’ve always considered these images personal postcards from wherever they were taken. Wish you were there!</p>
      <br></br>
      <hr></hr>
    </TextWrap>
    <PhotoGallery data={data} />
  </div>
)

export default Gallery4
