import styled from 'styled-components'
import React from 'react'

const FooterArea = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: baseline;
  background: #2b1d0e;
  margin: 0;
  height: 50px;
  position: absolte;
  bottom: 50px;
  width: 100%;
`

const Footer = () => {
  return(
    <FooterArea />
  )
}

export default Footer
