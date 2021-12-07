import React from 'react';
import './App.css';
import "animate.css/animate.min.css";
import Main from './Components/mainComponent';
import Particles from "react-tsparticles";

const App = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          preset: "big-circles",
          backgroundMask: {
            enable: true,
            cover: {
              value: {
                r: 0,
                g: 0,
                b: 0
              }
            }
          },
          background: {
            image:
              "url('https://hdwallsource.com/img/2014/4/digital-wallpapers-24971-25651-hd-wallpapers.jpg')",
            size: "100% 100%",
            repeat: "no-repeat"
          },
          particles: {
            opacity: {
              value: 1,
              random: {
                enable: true,
                minimumValue: 0.05
              },
              animation: {
                enable: true,
                speed: 1.5,
                minimumValue: 0.05
              }
            },
            size: {
              value: 120
            }
          }
          }} />
        <Main />
       </>
  );
};

export default App;
