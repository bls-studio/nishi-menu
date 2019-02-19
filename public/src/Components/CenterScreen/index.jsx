import React from 'react';
import './center.scss';

// images
import pmPoke from '../../../dist/assets/pmpoke.jpg';

const Center = () => (
  <div id="center">
    <div className="header">
      <h1>Build Your Own Bowl</h1>
    </div>
    <div className="centerMenuContainer">
      <div className="centerLeft">
        <img className="animatingImg" src={pmPoke} />
      </div>
      <div className="centerRight">
        <div className="step1 steps">
          <h3>Step 1: Choose your base layer</h3>
          <h4>White Rice | Brown Rice | Salad</h4>
        </div>
        <div className="step2 steps">
          <h3>Step 2: Pick our fresh, delicious selections of fish</h3>
          <h4>Salmon | Tuna | Albacore | Shrimp</h4>
        </div>
        <div className="step3 steps">
          <h3>Step 3: Enjoy unlimited toppings on us! (or not)</h3>
          <h4>Cucumbers | Ginger | Seaweed Salad | Corn | Edamame | Sweet Onion | Jalapeno</h4>
        </div>
        <div className="step4 steps">
          <h3>Step 4: Douse your bowl with sauce or have just a drizzle</h3>
        </div>
      </div>
    </div>
  </div>
);

export default Center;