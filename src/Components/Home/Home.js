import React from 'react';
import example from '../../Assets/example.png'
import './Home.css';

const Home = () => {
  // Landing page component

  return (
    <div className="home">
      <div className="upper-container">
        <p className="intro">Now you can build your family crest with emojis.
          Yes, it's the one thing you didn't know you needed. Until now.
        </p>
        <div className="img-wrapper">
          <img src={example} className="example" alt="example emoji coat of arms"/>
        </div>

      </div>

      <button>Get Started Now</button>
    </div>
  )
}

export default Home;
