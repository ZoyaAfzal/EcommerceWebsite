'use client'
import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';

const Hero = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false
    };

    const slideData = [
        {
            id: 0,
            img: "/Banner2.png",
            title: "Trending Items",
            mainTitle: "WOMEN'S LATEST FASHION SALE",
            price: "$20"

        }, 
        {
            id: 1,
            img: "/Banner3.png",
            title: "Trending Accessories",
            mainTitle: "MODERN & CLASSY ACCESSORIES",
            price: "$30"

        }, 
        {
            id: 2,
            img: "/Banner1.jpg",
            title: "Sale Offer",
            mainTitle: "SPECIAL OFFERS SALE",
            price: "$25"

        },


    ]
  return (
    <div>
        <div className="container pt-6 lg:pt-0">
            <Slider {...settings}>
            {slideData.map((item) => (
            <Slide 
            key= {item.id}
            img={item.img}
            title={item.title}
            mainTitle={item.mainTitle}
            price={item.price}
            />
            ))}

            </Slider>
        </div>
    </div>
  )
}

export default Hero