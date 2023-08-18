import ChampionCard from "./ChampionCard";
import "./champion.scss";

import { Swiper, SwiperSlide } from 'swiper/react'

import { bg2 } from '../../assets/images'
import { championsData } from "../../assets/dummy"

const Champion = ({ isActive }) => {

  return (
    <section className={`championContainer section ${isActive ? "active" : ""}`} >
      <div style={{ background: `url(${bg2}) no-repeat center center/cover` }} className="bg2"></div>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={90}
        grabCursor={true}
        nested={true}
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
      >
        {
          championsData.map((item, index) => (
            <SwiperSlide key={index} className={`SwiperSlide ${isActive ? "active" : ""}`}>
              <ChampionCard item={item} id={index} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section >
  )
}

export default Champion