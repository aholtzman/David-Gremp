import React, { Component } from 'react'
import styled from 'styled-components'
import SlideMenu from './SlideMenu'
import MenuButton from './MenuButton'

const Div = styled.div`
  width: 100vw;
`

export default class Display extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }

    this.handleMouseDown = this.handleMouseDown.bind(this)
  }

  handleMouseDown(e) {
    this.setState(
      {
        visible: !this.state.visible
      }
    );
    e.stopPropagation()
  }

  render() {
    return(
      <Div>
        <MenuButton handleMouseDown={this.handleMouseDown}><img src={require('../images/assets/hamburger-icon.png')} alt='menu button' /></MenuButton>
        <SlideMenu
          visibleState={this.state.visible}
          handleMouseDown={this.handleMouseDown}
        />
        {this.props.children}
      </Div>
    )
  }
}
