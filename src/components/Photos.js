import React, { Component } from 'react';
import Photo from './Photo'

export default class Photos extends Component {
  render() {
    return(
      <div className="photos">
        {this.props.data.map((data) => {
          return <Photo data={data} key={data.id} name={data.name}/>
        })}
      </div>
    );
  }
}
