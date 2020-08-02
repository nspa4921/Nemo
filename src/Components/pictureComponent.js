import React, { Component } from 'react';
import image from '../assets/download.png';

  class Picture extends Component {
    render(){
      return(
        <div>
        <img className="picture" src={image} alt=""/>
        </div>
     );
    }
  }

export default Picture;

