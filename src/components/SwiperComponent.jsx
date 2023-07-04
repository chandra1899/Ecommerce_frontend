import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import SwipeCard from './SwipeCard'

import computer1_icon from '../assets/computer1_icon.png'
import laptop1_icon from '../assets/laptop1_icon.png'
import mouse1_icon from '../assets/mouse1_icon.png'
import pendrive1_icon from '../assets/pendrive1_icon.png'
import phone1_icon from '../assets/phone1_icon.png'

function SwiperComponent() {
  return (
    <div className="container">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
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
        <SwipeCard src={mouse1_icon} />
        </div>
        
        </SwiperSlide>
        <SwiperSlide>
        <div className=' mt-5 h-[430px] w-[340px]'>
        <SwipeCard src={laptop1_icon} />
        </div>
          
        </SwiperSlide>
        <SwiperSlide>
        <div className=' mt-5 h-[430px] w-[340px]'>
        <SwipeCard src={computer1_icon} />
        </div>
         
        </SwiperSlide>
       
       
        <SwiperSlide>
        <div className=' mt-5 h-[430px] w-[340px]'>
        <SwipeCard src={phone1_icon} />
        </div>
         
        </SwiperSlide>       
        <SwiperSlide>
        <div className=' mt-5 h-[430px] w-[340px]'>
        <SwipeCard src={pendrive1_icon} />
        </div>
        
        </SwiperSlide>
        <div className="slider-controler mt-6">
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

export default SwiperComponent;