import './ChampionDetail.scss'

import { closeIcon } from '../../assets/images'
import { useRef } from 'react'

const ChampionDetail = ({ item, id }) => {

    const iframeRef = useRef(null)

    const onClose = () => {
        document.querySelector(`#champ-detail-${id}`).classList.remove('active')
        iframeRef.current.setAttribute('src', '')

        const img = document.querySelector(`#champ-img-${id}`)
        img.remove()
    }

    return (
        <div
            id={`champ-detail-${id}`}
            className={`champion-detail`}
            style={{ width: "100%", height: '100vh', background: `url(${item.bgLarge}) no-repeat center center/cover` }}
        >
            <div className="champion-detail__content">
                <span className='name'>{item.nickName}</span>
                <h2 className="name main-color">{item.name}</h2>
                <span>Role: <span className="second-color">{item.role}</span></span>
                <br />
                <span>Difficulty: <span className="second-color">{item.difficulty}</span></span>
                <div className="story">
                    {item.description}
                </div>
                <span>Champion spotlight</span>
                <div className="video">
                    <iframe
                        title="champion spotlight"
                        ref={iframeRef}
                        width="100%"
                    ></iframe>
                </div>
            </div>
            <div className="champion-detail__close" onClick={onClose}>
                <img src={closeIcon} alt="" />
            </div>
        </div>
    )
}

export default ChampionDetail