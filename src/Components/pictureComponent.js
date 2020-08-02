import React, { Component } from 'react';
import image from '../assets/download.png';

  class Picture extends Component {
    render(){
      return(
        <div>
        <img className="picture" src='../assets/download.png' alt="profile picture"/>
        </div>
     );
    }
  }

export default Picture;

