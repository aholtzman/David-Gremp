import styled from 'styled-components'
import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'
import NavList from './NavList'
import MenuButton from './MenuButton'

const Div = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transform: translate3d(0, -100vh, 0);
  transition: transform .3s cubic-bezier(0, .52, 0, 1);
  overflow: scroll;
  z-index: 999;
`
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  justify-content: center;
  align-items: center;
  align-content: space-around;
  height: 50px;
`

class SlideMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {}

    this.getVisibleState = this.getVisibleState.bind(this)
  }

  getVisibleState() {
    if (this.props.visibleState === true) {
      return 0;
    }else{
      return -100;
    }
  }

  render() {
    let self = this

    return(
      <Motion style={{x: spring(this.getVisibleState())}}>
        {
          function({x}) {
            return(
              <div>
                <Div style={{transform: 'translate3d(0vw, ' + x + 'vh, 0)'}}>
                  <MenuButton close handleMouseDown={self.props.handleMouseDown}><img src={require('../images/assets/close.png')} alt='close button' /></MenuButton>
                  <Menu>
                    <NavList />
                  </Menu>
                </Div>
              </div>

            )
          }
        }
      </Motion>
    );
  }
}

export default SlideMenu
