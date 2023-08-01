import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import Lawyer from './../../assets/lawyers.avif'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination, Navigation } from 'swiper/modules';

export default function SwiperEmployees() {
  return (
    <div className="SwiperTeam">
      <div className="SwiperContainer">
        <h2>Поиск специалиста</h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="SwiperEmployees"
        >
          <SwiperSlide>
            <div className="lawyers">
              <img src={Lawyer} alt="" />
              <div></div>
              <h3>Alastair Campbell</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lawyers">
              <img src={Lawyer} alt="" />
              <div></div>
              <h3>Alastair Campbell</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lawyers">
              <img src={Lawyer} alt="" />
              <div></div>
              <h3>Alastair Campbell</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lawyers">
              <img src={Lawyer} alt="" />
              <div></div>
              <h3>Alastair Campbell</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lawyers">
              <img src={Lawyer} alt="" />
              <div></div>
              <h3>Alastair Campbell</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lawyers">
              <img src={Lawyer} alt="" />
              <div></div>
              <h3>Alastair Campbell</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lawyers">
              <img src={Lawyer} alt="" />
              <div></div>
              <h3>Alastair Campbell</h3>
            </div>
          </SwiperSlide>
        </Swiper>
        <Link className='find-specialist' to="/Contacts">Найти специалиста</Link>
      </div>
    </div>
  );
}
