import {
    Swiper,
    SwiperSlide
} from 'swiper/react'

import SwiperCore, {
    Mousewheel,
    Pagination
} from 'swiper'

import {
    Welcome,
    Champion,
    ChampionDetail,
    Trailer,
    Credit
} from '../components'

import { championsData } from '../assets/dummy'

SwiperCore.use([Mousewheel, Pagination])

const swiperOptions = {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: { clickable: true },
    speed: 1000
}

const Home = () => {
    return (
        <>
            <Swiper {...swiperOptions}>
                <SwiperSlide>
                    {({ isActive }) => <Welcome isActive={isActive} />}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <Champion isActive={isActive} />}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <Trailer isActive={isActive} />}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <Credit isActive={isActive} />}
                </SwiperSlide>
            </Swiper>
            {
                championsData.map((item, index) => <ChampionDetail
                    key={index}
                    item={item}
                    id={index}
                />)
            }
            <div className="scroll " style={{ textAlign: "center" }}>
                <span>Scroll to see effect</span> <br />
                <span><span style={{ color: "red" }}>&#10084;</span><em>Akinola</em><span style={{ color: "red" }}>&#10084;</span></span>

            </div>
        </>
    )
}

export default Home