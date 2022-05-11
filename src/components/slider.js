import React, { Component } from "react";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
  url:'img-s1.jpg',
  caption: ''
  }
];
const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    arrows:false,
  };

console.log("IMAGES",fadeImages);
export default function Slider() {
  return (
    <div  className="slide-container">
      <Fade {...properties}>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img src={require('../img/'+fadeImage.url)} />
            </div>
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  )
}