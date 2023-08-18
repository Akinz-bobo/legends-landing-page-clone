import { trailerImg, bg3 } from "../../assets/images"
import './trailer.scss';
const Trailer = ({ isActive }) => {
    return (
        <div className={`trailer section ${isActive ? "active" : ""}`}>
            <div className="bg3" style={{ background: `url(${bg3}) no-repeat center center/cover` }}></div>
            <div className="trailer__img">
                <img src={trailerImg} alt="trailerImg" />
            </div>
            <div className='trailer__info'>
                <div className="title">
                    <span>Compete With</span>
                    <h2 className="main-color">Friends</h2>
                </div>
                <iframe src="https://www.youtube.com/embed/TFzkbos0oeo" frameBorder="0"></iframe>
            </div>
        </div>
    )
}

export default Trailer