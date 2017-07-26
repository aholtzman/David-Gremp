import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  width: 100%;
  border: none;
  font-size: 15px;
  background-color: rgba(0, 0, 0, 0);
`
export default class MenuButton extends Component {
  render() {
    return(
      <Button onMouseDown={this.props.handleMouseDown}>{this.props.children}</Button>
    );
  }
}
