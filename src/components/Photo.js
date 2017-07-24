import React, { Component } from 'react'
import Image from './Image'
import Title from './Title'
import ImageWrap from './ImageWrap'

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
      <ImageWrap>
        <Image
          src={this.props.data.image}
          alt={this.props.data.title}
          horizontal={this.props.data.orientation}
          />
      </ImageWrap>
      <Title>{this.props.data.name}</Title>
      </div>
    );
  }
}

export default Photo
