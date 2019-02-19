import React from 'react';
import './center.scss';
import 'animate.css';

// images
import pmPoke from '../../../dist/assets/pmpoke.jpg';

// const bounce = document.querySelector('.')

const Center = () => (
  <div id="center">
    <div className="center-container">
      <div className="header">
        <h1>Build Your Own Bowl</h1>
      </div>
      <div className="centerMenuContainer">
        <div className="centerLeft">
          <div className="animatingImg" src={pmPoke}></div>
          {/* <img className="animatingImg" src={pmPoke} /> */}
        </div>
        <div className="centerRight">
          <div className="step1 steps">
            <h3 className="animated bounce slow">Step 1: Choose your bowl size & base layer</h3>
            <h4>White Rice | Brown Rice | Salad</h4>
          </div>
          <div className="step2 steps">
            <h3 className="animated bounce slow">Step 2: Pick our fresh, delicious selections of fish</h3>
            <h4>Salmon | Tuna | Albacore | Shrimp</h4>
          </div>
          <div className="step3 steps">
            <h3 className="animated bounce slow">Step 3: Enjoy unlimited toppings on us! (or not)</h3>
            <h4>Cucumber | Ginger | Seaweed Salad | Corn</h4>
            <h4>Crabmeat | Edamame | Sweet Onion | Jalapeno</h4>
          </div>
          <div className="step4 steps">
            <h3 className="animated bounce slow">Step 4: Douse your bowl with sauce or have just a drizzle</h3>
            <h4>Spicy Mayo | Ponzu | Eel Sauce | Spicy Ponzu</h4>
          </div>
          <div className="extras steps">
            <h3>Avocado +$1</h3>
            <h3>Extra Protein  +$2</h3>
            <h3>Extra Rice +$2</h3>
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default Center;