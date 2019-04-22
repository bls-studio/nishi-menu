import React from 'react';
import './right.scss';
import { Slide } from 'react-slideshow-image';
import ramen from '../../../dist/assets/holdingLarge.jpg'
import poke from '../../../dist/assets/don-daskalo-738393-unsplash.jpg';
import bowl from '../../../dist/assets/hussain-ibrahim-1487946-unsplash.jpg';
import veggie from '../../../dist/assets/jonathan-borba-1397924-unsplash.jpg'



const bowl2 = "https://images.unsplash.com/photo-1534528696266-aade1e8bae09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80";
const sushi = "https://images.unsplash.com/photo-1538497218805-9844211436f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80";
const veggiebowl = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80";



const properties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
  autoplay: true,
}
const slideImages = [
  poke,
  bowl,
  veggie,
  sushi,
  bowl2,
  veggiebowl
];
// 'images/slide_4.jpg'

import right from '../../../dist/assets/Artboard11.png';

const Right = () => (
  <div id="right">
    <div className="slideshow">
      {/* <img src={poke} alt=""/> */}

      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[5]})`}}>
          </div>
        </div>
      </Slide>
    </div>
    <div className="right_screen">
      <div className="">

      </div>
      <div>
        <img src={ramen} alt=""/>
      </div>

    </div>
  </div>
);
export default Right;
{/* <img src={right} alt=""/> */}
    {/* <img src={roll} className="roll" alt=""/>
    <img src={coke} className="coke" alt=""/> */}
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