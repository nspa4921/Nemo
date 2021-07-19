import React, { Component } from 'react';
import image from '../assets/nemo2.jpg';


  class Picture extends Component {
    render(){
      return(
        <div className="picture-body">
          <img className="picture" src={image} alt="Nemanja Spasic"/>
        </div>
     );
    }
  }

export default Picture;

