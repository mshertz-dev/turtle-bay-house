import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import pic2 from '../pic2.jpeg';
import pic3 from '../image3.jpg';
import pic4 from '../image4.jpg';
import '../App.css';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div className="image-container">
                    <img src={pic2} id="carousel-img"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div className="image-container">
                    <img src={pic3} id="carousel-img"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div className="image-container">
                    <img src={pic4} id="carousel-img"/>
                    <p className="legend">Legend 2</p>
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel;
// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>