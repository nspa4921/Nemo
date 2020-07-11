import React, { Component } from 'react';
import {  NavbarBrand } from 'reactstrap';
import Header from '../Components/headerComponent';
import Aboutme from '../Components/aboutmeComponent';
import Experience from '../Components/experienceComponent';
import Footer from '../Components/footerComponent';

class Main extends Component {

  constructor(props) {
    super(props);
  
    };

 
  render() {
    return (
      <div>
        <Header />
        <Aboutme />
        <Experience />
        <Footer />
        {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} /> */}
        {/* <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
      </div>
    );
  }
}

export default Main;