import React, { Component } from 'react';
import image from '../assets/download.png';

  class Picture extends Component {
    render(){
      return(
        <div>
        <image className="picture" src={image} alt="profilepic"/>
        </div>
     );
    }
  }

export default Picture;

