import { useRef } from "react";
import "./championCard.scss";

const ChampionCard = ({ item, id }) => {
    const cardRef = useRef()
    const showDetails = (item, id) => {
        const img = cardRef.current;
        const pos = img.getBoundingClientRect()

        const newNode = img.cloneNode(true)
        newNode.style.width = img.offsetWidth + 'px'
        newNode.style.height = img.offsetHeight + 'px'
        newNode.style.position = 'absolute'
        newNode.style.top = pos.top + 'px'
        newNode.style.left = pos.left + 'px'
        newNode.style.zIndex = '200'
        newNode.style.transition = 'all 0.7s ease'
        newNode.id = `champ-img-${id}`
        newNode.classList.add('fixpic')
        setTimeout(() => {
            newNode.style.width = 'auto'
            newNode.style.height = '90%'
            newNode.style.top = 0
            newNode.style.left = 0
        },)

        document.body.appendChild(newNode)


        const videoUrl = `https://youtube.com/embed/${item.video}`;
        document.querySelector(`#champ-detail-${id} iframe`).setAttribute('src', videoUrl);
        document.querySelector(`#champ-detail-${id}`).classList.add('active');
    }
    return (
        <div className="championCard" onClick={() => showDetails(item, id)}>
            <div className="bg-image" style={{ background: `url(${item.bg}) no-repeat center center/cover ` }}></div >
            <img ref={cardRef} className="hoverimg" src={item.img} alt="img" />
            <h3 className="name">{item.name}</h3>
        </div>
    )
}


export default ChampionCard