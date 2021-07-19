import React, {Component} from 'react';
import './App.css';
import "animate.css/animate.min.css";
import Main from './Components/mainComponent';
import FadeIn from 'react-fade-in';


class App extends Component {

  render() {
    return (
      <div className="App">
        <FadeIn>
        <Main />
        </FadeIn>
      </div>
    );
  }
}

export default App;
