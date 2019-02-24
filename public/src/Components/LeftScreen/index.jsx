import React from 'react';
import './left.scss';
import './leftMinimal.scss';

import transPoke from '../../../dist/assets/pokeTransLarge.png';
// import transPoke from '../../../dist/assets/sideview.png';


const Left = () => (
  <div id="left">
    <img src={transPoke} className="pokeImage1"/>
    <div className="leftHeader">
      <h3>Signature Bowls</h3>
    </div>
    <div className="leftItems">
      {/* <div className="left_right"> */}
      {/* </div> */}
      <div className="left_left">
        <div className="item">
          <div className="itemNprice">
            <h3>Aloha Bowl</h3>
            <h3>Reg | $9.98</h3>
          </div>
          <p>Hawaiian Salmon, Hawaiian Tuna, Spicy Tuna, Crabmeat, Spicy Mayo, Eel Sauce</p>
        </div>
        <div className="item">
          <div className="itemNprice">
              <h3>Hoku Bowl</h3>
              <h3>Reg | $9.98</h3>
            </div>
            <p>Ahi Tuna, Albacore, Spicy Tuna, Crabmeat, Ponzu, Sesame Oil</p>
          </div>
        <div className="item">
          <div className="itemNprice">
            <h3>Koa Bowl 🌶</h3>
            <h3>Reg | $9.98</h3>
          </div>
          <p>Hawaiian Salmon, Hawaiian Tuna, Spicy Tuna, Albacore, Crabmeat, Sesame Oil, Danger Sauce, Spicy Ponzu</p>
        </div>
        <div className="item">
          <div className="itemNprice">
            <h3>Moana Bowl</h3>
            <h3>Reg | $9.98</h3>
          </div>
          <p>Shrimp, Octopus, Scallops, Tuna, Crabmeat, Pineapple, Spicy Mayo, Eel Sauce, Sesame Oil</p>
        </div>
        <div className="item">
          <div className="itemNprice">
            <h3>Ono Bowl</h3>
            <h3>Reg | $9.98</h3>
          </div>
          <p>Hawaiian Salmon, Hawaiian Tuna, Spicy Tuna, Shrimp, Crabmeat, Avocado, Spicy Mayo, Eel Sauce, Sesame Oil</p>
        </div>
      </div>
    </div>
  </div>
);
export default Left;