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
                    <img src="https://turtle-bay-house.s3.us-east-2.amazonaws.com/turtlebay1.jpeg" id="carousel-img"/>
                    <p className="legend">Main Deck Daytime</p>
                </div>
                <div className="image-container">
                    <img src="https://turtle-bay-house.s3.us-east-2.amazonaws.com/turtlebay2.jpeg" id="carousel-img"/>
                    <p className="legend">Main Deck Sunset</p>
                </div>
                <div className="image-container">
                    <img src="https://turtle-bay-house.s3.us-east-2.amazonaws.com/turtlebay3.jpeg" id="carousel-img"/>
                    <p className="legend">Main Deck Sunset</p>
                </div>
                <div className="image-container">
                    <img src="https://turtle-bay-house.s3.us-east-2.amazonaws.com/turtlebay6.jpeg" id="carousel-img"/>
                    <p className="legend">Sitting Area</p>
                </div>
                <div className="image-container">
                    <img src="https://turtle-bay-house.s3.us-east-2.amazonaws.com/turtlebay16.jpeg" id="carousel-img"/>
                    <p className="legend">Living Room</p>
                </div>
                <div className="image-container">
                    <img src="https://turtle-bay-house.s3.us-east-2.amazonaws.com/turtlebay7.jpeg" id="carousel-img"/>
                    <p className="legend">Main Deck</p>
                </div>
                <div className="image-container">
                    <img src="https://turtle-bay-house.s3.us-east-2.amazonaws.com/turtlebay9.jpeg" id="carousel-img"/>
                    <p className="legend">Master Bedroom</p>
                </div>
                <div className="image-container">
                    <img src="https://turtle-bay-house.s3.us-east-2.amazonaws.com/turtlebay10.jpeg" id="carousel-img-2"/>
                    <p className="legend">Master Bathroom</p>
                </div>
                <div className="image-container">
                    <img src="https://turtle-bay-house.s3.us-east-2.amazonaws.com/turtlebay11.jpeg" id="carousel-img"/>
                    <p className="legend">Upper Deck</p>
                </div>
                <div className="image-container">
                    <img src="https://turtle-bay-house.s3.us-east-2.amazonaws.com/turtlebay12.jpeg" id="carousel-img"/>
                    <p className="legend">Bedroom 2</p>
                </div>
                <div className="image-container">
                    <img src="https://turtle-bay-house.s3.us-east-2.amazonaws.com/turtlebay13.jpeg" id="carousel-img"/>
                    <p className="legend">Bedroom 3</p>
                </div>
                <div className="image-container">
                    <img src="https://turtle-bay-house.s3.us-east-2.amazonaws.com/turtlebay14.jpeg" id="carousel-img-2"/>
                    <p className="legend">2nd Story Bathroom</p>
                </div>
                <div className="image-container">
                    <img src="https://turtle-bay-house.s3.us-east-2.amazonaws.com/turtlebay15.jpeg" id="carousel-img"/>
                    <p className="legend">Bedroom 4</p>
                </div>
                <div className="image-container">
                    <img src="https://turtle-bay-house.s3.us-east-2.amazonaws.com/turtlebay17.jpeg" id="carousel-img"/>
                    <p className="legend">Kitchen</p>
                </div>
                <div className="image-container">
                    <img src="https://turtle-bay-house.s3.us-east-2.amazonaws.com/turtlebay18.jpeg" id="carousel-img"/>
                    <p className="legend">Dining Area</p>
                </div>
                <div className="image-container">
                    <img src="https://turtle-bay-house.s3.us-east-2.amazonaws.com/turtlebay20.jpeg" id="carousel-img"/>
                    <p className="legend">Driveway</p>
                </div>
                <div className="image-container">
                    <img src="https://turtle-bay-house.s3.us-east-2.amazonaws.com/turtlebay8.jpeg" id="carousel-img-2"/>
                    <p className="legend">Ground Level Bathroom</p>
                </div>
                <div className="image-container">
                    <img src="https://turtle-bay-house.s3.us-east-2.amazonaws.com/turtlebay19.jpeg" id="carousel-img-2"/>
                    <p className="legend">Ground Level Bathroom</p>
                </div>
                <div className="image-container">
                    <img src="https://turtle-bay-house.s3.us-east-2.amazonaws.com/turtlebay21.jpeg" id="carousel-img"/>
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