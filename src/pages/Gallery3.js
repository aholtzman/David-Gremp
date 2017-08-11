import React from 'react';
import TextWrap from '../components/TextWrap'
import PhotoGallery from '../components/PhotoGallery'
import data from '../images/FR_data'
import NavBar from '../components/NavBar'

const Gallery3 = () => (
  <div>
    <NavBar />
    <TextWrap>
      <h1>Family Run</h1>
      <p>This photo documentary of small family-owned-and-operated businesses was made as part of my M.A. thesis while attending Southern Illinois University, Carbondale, IL between 1976 and 1977, and with the support of a humanities grant from the Rockefeller Foundation in 1980. Darkroom contact prints were made from 5 x 7” negatives. Enlarged 11 x 14” inkjet prints were made for an exhibit at Alibi Fine Art (“Family Run”, January 2011).
      </p><p>
      “What started out as bicentennial tribute to Midwestern, family-driven, entrepreneurial spirit turned into a cross-country search for families living the American dream . . . for better and for worse.”
      </p>
      <br></br>
      <hr></hr>
    </TextWrap>
    <PhotoGallery data={data} />
  </div>
)

export default Gallery3
