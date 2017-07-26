import styled from 'styled-components';
import React from 'react';
import { NavLink } from 'react-router-dom'

const NavButtons = styled(NavLink)`
  text-decoration: none;
  color: #F5F5F5;
  font-size: 30px;
  padding: 10px;

  &:hover {
    color: grey;
  }

`
const NavArea = styled.div`
  display: flex;
  justify-content: space-around;
  background: #2b1d0e;

`

const NavBar = () => {
  return (
    <NavArea>
    <NavButtons to='/'>David Gremp</NavButtons>
    </NavArea>
  )
}
export default NavBar
