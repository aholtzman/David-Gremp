import styled from 'styled-components';
import React from 'react';
import { NavLink } from 'react-router-dom'

const NavButtons = styled(NavLink)`
  text-decoration: none;
  color: #F5F5F5;
  font-size: 30px;

  &:hover {
    color: grey;
  }
`
const Brand = styled.div`
  border-bottom: 1px solid dimgrey;
  background-color: rgba(0, 0, 0, .8);
  text-align: center;
  height: 50px;
  position: fixed;
  padding-top: 8px;
  top: 0;
  width: 100%;
`

const NavBar = () => {
  return (
    <Brand>
    <NavButtons to='/'>David Gremp</NavButtons>
    </Brand>
  )
}
export default NavBar
