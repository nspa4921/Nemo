import React, { Component } from 'react';
import image from '../assets/img/faces/ayo-ogunseinde-2.jpg';

  class Picture extends Component {
    render(){
      return(
        <div>
        <img className="picture" src={image} />
        </div>
     );
    }
  }

export default Picture;

