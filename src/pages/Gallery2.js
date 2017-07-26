import React from 'react';
import TextWrap from '../components/TextWrap'
import PhotoGallery from '../components/PhotoGallery'
import data from '../images/DS_data'
import Footer from '../components/Footer'
import Display from '../components/Display'

const Gallery2 = () => (
  <div>
    <Display />
    <TextWrap>
      <h1>Downstate</h1>
      <p>This body of work was produced between 1974 and 1975 while living in Carterville, IL. It includes work done for a documentary on the local high school, several visits to Fred’s Dance Barn and people that I encountered around town. Selected images were printed and exhibited at Alibi Fine Art (“Downstate”) in January 2016.
      </p><p>
      “I lived in Carterville for nearly ten years (1969 – 1978), but didn’t start photographing it until the mid-70s. I’d begun to consider it home by then, but still viewed it as a passing phase. A turning point.”
      </p>
      <br></br>
      <hr></hr>
    </TextWrap>
    <PhotoGallery data={data} />
    <Footer />
  </div>
)

export default Gallery2
