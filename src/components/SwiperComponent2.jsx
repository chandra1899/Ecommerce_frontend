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

import laptop2_icon from '../assets/laptop2_icon.png'
import laptop3_icon from '../assets/laptop3_icon.png'
import shoe2_icon from '../assets/shoe2_icon.png'
import watch2_icon from '../assets/watch2_icon.png'
import computer2_icon from '../assets/computer2_icon.png'

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
        <div className=' mt-5 h-[430px] w-[340px]'>
        <SwipeCard src={laptop2_icon} />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=' mt-5 h-[430px] w-[340px]'>
        <SwipeCard src={shoe2_icon} />
        </div>
        
        </SwiperSlide>
        
        <SwiperSlide>
        <div className=' mt-5 h-[430px] w-[340px]'>
        <SwipeCard src={laptop3_icon} />
        </div>
        
        </SwiperSlide>
        <SwiperSlide>
        <div className=' mt-5 h-[430px] w-[340px]'>
        <SwipeCard src={watch2_icon} />
        </div>
        
        </SwiperSlide>
        
        <SwiperSlide>
        <div className=' mt-5 h-[430px] w-[340px]'>
        <SwipeCard src={computer2_icon} />
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
