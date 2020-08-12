import React, { Component } from 'react';
import image from '../assets/photo.png';


  class Picture extends Component {
    render(){
      return(
        <div>
        <img className="picture" src={image}  alt="Nemanja Spasic"/>
        </div>
     );
    }
  }

export default Picture;

