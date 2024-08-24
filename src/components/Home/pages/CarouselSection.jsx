import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './mySwiper.css'

const CarouselSection = () => {
  const carouselItems = [
    {
      url: "/assets/page-1/WINGS-Home-image-1.png",
      alt: "wings-home-1",
      href: "/polo",
    },
    {
      url: "/assets/page-1/WINGS-Home-image-2.png",
      alt: "wings-home-2",
      href: "/oversized",
    },
    
    {
      url: "/assets/page-1/WINGS-Home-image-5.png",
      alt: "wings-home-5",
      href: "/black-rounded-Tshirts",
    },

    {
      url: "/assets/page-1/WINGS-Home-image-4.png",
      alt: "wings-home-4",
    },
    
  ];

  const [currentText, setCurrentText] = useState("Exciting offers on B2B purchase");
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const texts = [
      "Exciting offers on B2B purchase",
      "Upto 50% off on each product",
      "Free shipping",
    ];

    let index = 0;
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        index = (index + 1) % texts.length;
        setCurrentText(texts[index]);
        setFade(true); // Start fade in
      }, 500); // Match this with transition duration in CSS
    }, 3500); // Adjust time to include both fade-out and display time

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h2 className={`text-1xl sm:text-2xl md:text-2xl font-bold text-white text-center py-2 px-2 mb-4 bg-gradient-to-r from-yellow-400 to-red-500 shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out fade ${fade ? 'active' : ''}`}>
        {currentText}
      </h2>
      <div className="container mx-auto px-4">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {carouselItems.map((item, index) => (
            <SwiperSlide key={index}>
              <Link to={item.href} className="block relative w-full pb-[100%]">
                <img
                  src={item.url}
                  alt={item.alt}
                  className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer rounded-lg"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default CarouselSection;
