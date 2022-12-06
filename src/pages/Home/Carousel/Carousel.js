import React from 'react';
import './Carousel.css'

const Carousel = () => {
    return (
        <div>
            <div className="carousel my-8 w-4/5 rounded-lg mx-auto">
                <div id="slide1" className="carousel-item carousel-img relative w-full">
                    <img alt='' src="https://www.obhijaan.com/wp-content/uploads/2021/05/image-5.png" id='slider-img' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img alt='' src="https://yearlynews.com/wp-content/uploads/2021/06/Green-Line-Paribahan.png" id='slider-img' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img alt='' src="https://porzoton.com/wp-content/uploads/2021/01/Shyamoli-Paribahan-all-ticket-counters-mobile-numbers-1.jpg" id='slider-img' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img alt='' src="https://static.busbd.com.bd/busbdmedia/Bus_2.1517826297" id='slider-img' className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;