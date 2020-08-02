import React, { Component } from 'react';
import Header from '../Components/headerComponent';
import Aboutme from '../Components/aboutmeComponent';
import Experience from '../Components/experienceComponent';
import Footer from '../Components/footerComponent';
import Education from '../Components/educationComponent'; 
import { COURSES } from './shared/courses';
import SimpleReactLightbox from "simple-react-lightbox";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: COURSES,
    };
  }

 
  render() {
    return (
      <div>
        <Header />
        <Aboutme/>
        <Experience />
        <SimpleReactLightbox>
          <Education courses={this.state.courses} /> 
        </SimpleReactLightbox>
        <Footer />
      </div>
    );
  }
}

export default Main;