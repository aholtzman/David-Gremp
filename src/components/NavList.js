import styled from 'styled-components'
import React from 'react'
import { NavLink } from 'react-router-dom'

const List = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 350px;
`

const Link = styled(NavLink)`
  color: white;
  font-size: 20px;
  text-decoration: none;
  line-height: 200%;

  &:hover {
    color: grey;
  }
`

const NavList = () => {
  return(
    <List>
      <hr />
      <Link to='/Family-run'>Family Run</Link>
      <Link to='/Downstate'>Downstate</Link>
      <Link to='/Chicago7879'>Chicago 78/79</Link>
      <hr />
      <Link to='/About'>About</Link>
    </List>
  );
}

export default NavList
