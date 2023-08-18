import './credit.scss';

import { bgVideo } from "../../assets/videos"

const Credit = ({ isActive }) => {
  return (
    <section className={`section credit ${isActive ? "active" : ""}`}>
      <video src={bgVideo} autoPlay loop muted className='overlay' />
      <div className="credit__content">
        <div className="title">
          <span>Start Your</span>
          <h2 className="main-color">LEGENDS</h2>
        </div>
        <div className="btns m-t-4">
          <button className="btn-main">PLAY NOW</button>
          <button className="btn-second">GET STARTED</button>
        </div>
      </div>
    </section>
  )
}

export default Credit