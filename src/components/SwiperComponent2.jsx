import React from "react";
import SwipeCard from './SwipeCard'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import 'swiper/css/navigation';

// import required modules
import { EffectCoverflow, Pagination ,Navigation} from "swiper";

export default function SwiperComponent2() {
  return (
    <div className="container bg-dimWhite ">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
        <div className=' mt-5 h-[370px] w-[340px]'>
        <SwipeCard src='https://swiperjs.com/demos/images/nature-1.jpg' />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=' mt-5 h-[370px] w-[340px]'>
        <SwipeCard src='https://swiperjs.com/demos/images/nature-2.jpg' />
        </div>
        
        </SwiperSlide>
        <SwiperSlide>
        <div className=' mt-5 h-[370px] w-[340px]'>
        <SwipeCard src='https://swiperjs.com/demos/images/nature-3.jpg' />
        </div>
        
        </SwiperSlide>
        <SwiperSlide>
        <div className=' mt-5 h-[370px] w-[340px]'>
        <SwipeCard src='https://swiperjs.com/demos/images/nature-4.jpg' />
        </div>
        
        </SwiperSlide>
        <SwiperSlide>
        <div className=' mt-5 h-[370px] w-[340px]'>
        <SwipeCard src='https://swiperjs.com/demos/images/nature-5.jpg' />
        </div>
        
        </SwiperSlide>
        <SwiperSlide>
        <div className=' mt-5 h-[370px] w-[340px]'>
        <SwipeCard src='https://swiperjs.com/demos/images/nature-6.jpg' />
        </div>
        
        </SwiperSlide>
        <SwiperSlide>
        <div className=' mt-5 h-[370px] w-[340px]'>
        <SwipeCard src='https://swiperjs.com/demos/images/nature-7.jpg' />
        </div>
        
        </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}
