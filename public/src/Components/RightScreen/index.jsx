import React from 'react';
import './right.scss';

import roll from '../../../dist/assets/roll.png';
import coke from '../../../dist/assets/coke.png';

const Right = () => (
  <div id="right">
    <img src={roll} className="roll" alt=""/>
    <img src={coke} className="coke" alt=""/>
    {/* <div className="rightHeader">
      <h1>Drinks & Snacks on the Go</h1>
    </div> */}
    {/* <div className="snackItems">
      <h2>Premade Rolls</h2>
      <div className="item">
        <div className="itemNprice">
          <h3>Cup Ramen</h3>
          <h3>$$$</h3>
        </div>
        <div className="itemNprice">
          <h3>California Roll</h3>
          <h3>$$$</h3>
        </div>
        <div className="itemNprice">
          <h3>Spicy Tuna Roll</h3>
          <h3>$$$</h3>
        </div>
        <div className="itemNprice">
          <h3>Salmon Roll</h3>
          <h3>$$$</h3>
        </div>
      </div>
      <h2>Drinks</h2>
      <div className="item">
        <div className="itemNprice">
          <h3>Can soda</h3>
          <h3>$$$</h3>
        </div>
        <div className="itemNprice">
          <h3>Thai Tea</h3>
          <h3>$$$</h3>
        </div>
      </div>
    </div> */}
  </div>
);
export default Right;