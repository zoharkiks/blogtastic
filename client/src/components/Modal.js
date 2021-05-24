import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Modal = () => {
    return (
        <div className="modal">
            
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={4000} >
                <div>
                    <img src="https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg" />
                    <p className="legend">Article Name</p>
                </div>
                <div>
                    <img src="https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg" />
                    <p className="legend">Article Name</p>
                </div>
                <div>
                    <img src="https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg" />
                    <p className="legend">Article Name</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Modal
