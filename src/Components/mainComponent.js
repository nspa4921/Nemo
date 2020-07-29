import React, { Component } from 'react';
import Header from '../Components/headerComponent';
import Aboutme from '../Components/aboutmeComponent';
import Experience from '../Components/experienceComponent';
import Footer from '../Components/footerComponent';
import Education from '../Components/educationComponent'; 
import { COURSES } from './shared/courses';

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
        <Education courses={this.state.courses} /> 
        <Footer />
        {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} /> */}
        {/* <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
      </div>
    );
  }
}

export default Main;