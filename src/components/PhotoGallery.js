import React, { Component } from 'react';
import Photos from './Photos';

export default class PhotosGallery extends Component {
  render() {
    return(
      <Photos data={this.props.data} />
    );
  }
}
