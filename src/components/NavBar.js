import styled, { css } from 'styled-components';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavButtons = styled(NavLink)`
  text-decoration: none;
  font-family: 'Quicksand', sans-serif;
  color: #F5F5F5;
  font-size: 20px;
  padding: 10px;

  &:hover {
    color: grey;
  }

  @media (max-width: 850px) {
    visibility: hidden;
  }

  ${props => props.home && css`
  font-size: 30px;
`}

`
const NavArea = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: baseline;
  background: #2b1d0e;
  margin: 0;
`

const NavBar = () => {
  return (
    <NavArea>
    <NavButtons home to='/'>David Gremp</NavButtons>
    <NavButtons to='/about'>About</NavButtons>
    <NavButtons to='/Family-run' activeClassName="selected">Family Run</NavButtons>
    <NavButtons to='/Downstate' activeClassName="selected">Downstate</NavButtons>
    <NavButtons to='/Chicago7879' activeClassName="selected">Chicago 78/79</NavButtons>
    </NavArea>
  )
}
export default NavBar
