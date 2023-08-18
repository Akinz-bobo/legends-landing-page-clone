import { bg1, champGaren, champAhri, champAshe } from "../../assets/images"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Autoplay } from "swiper"

import "./welcome.scss";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade'

const champImgs = [champAhri, champAshe, champGaren]
const Welcome = ({ isActive }) => {

    return (
        <div className={`welcomeContainer section ${isActive ? "active" : ""}`}>
            <div style={{ background: `url(${bg1})` }} className={`bgWelcome ${isActive ? "active" : ""}`}></div>
            <div className={`content ${isActive ? "active" : ""}`}>
                <div className="info">
                    <div className="title">
                        <span>Welcome To</span>
                        <h2 className="main-color">Summoner's Rift</h2>
                    </div>
                    <div className="description">
                        Team up with friends and test your skills in 5v5 MOBA combat. All the high-skill competition you crave, designed especially for mobile and console with revamped controls and streamlined matches.Explore the living universe of Runeterra through lore, comics, games, and more. Then dive into the community of gamers, cosplayers, musicians, and content creators who are waiting for you to join them.
                    </div>
                    <div className="btns">
                        <button className="btn-main">PLAY NOW</button>
                        <button className="btn-second">GET STARTED</button>
                    </div>
                </div>
                <div className="hoverimgae" >
                    <Swiper
                        modules={[EffectFade, Autoplay]}
                        slidesPerView={1}
                        autoplay={{ delay: 2000 }}
                        speed={1000}
                        effect="fade"
                        fadeEffect={{ crossFade: true }}
                    >
                        {
                            champImgs.map((pic) => (
                                <SwiperSlide>
                                    <img src={pic} alt={pic} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div >
    )
}

export default Welcome