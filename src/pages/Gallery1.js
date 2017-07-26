import React from 'react'
import TextWrap from '../components/TextWrap'
import PhotoGallery from '../components/PhotoGallery'
import data from '../images/7879_data'
import Footer from '../components/Footer'
import Display from '../components/Display'

const Gallery1 = () => (
  <div>
    <Display />
    <TextWrap>
      <h1>Chicago 78/79</h1>
      <p>These photographs were made between 1978 and 1979 in various Chicago neighborhoods while working as an artist-in-residence with the Chicago Council on Fine Arts. Selections of this work have been exhibited at Alibi Fine Art (“Chicago 78/79”, June 2013 and the Harold Washington Library in Chicago (“Straight Into the Camera”, December 2015 – May 2016).</p>
      <p>
      “This was a dream assignment! All I was asked (and paid!) to do was to walk around selected neighborhoods and take pictures. Most people I approached were more than happy, and proud to pose for me.”
      </p>
      <br></br>
      <hr></hr>
    </TextWrap>
    <PhotoGallery data={data} />
    <Footer />
  </div>
)

export default Gallery1
