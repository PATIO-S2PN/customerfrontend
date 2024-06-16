import React from 'react';
import './Animation.scss'; // Import the CSS file

const Animation = () => {
  return (
    <div className="animation-container">
      <div id="cooking">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="bubble" />
        ))}
        <div id="area">
          <div id="sides">
            <div id="pan" />
            <div id="handle" />
          </div>
          <div id="pancake">
            <div id="pastry" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animation;
