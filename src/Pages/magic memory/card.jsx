
import "./card.css"
import cover from "../../../assest/img/cover.jpg"
// eslint-disable-next-line react/prop-types
export default function Card({ src, handleChoice , flipped }){
console.log(src)
    const handleClick=(card)=>{
handleChoice(card)

    }
    
    return (
      <div className="card">
        <div className={flipped ? "flipped" : ""}>
          <img className="front" src={src}  alt="front" />

          <img
            className="back"
            src={cover}
            alt="back"
            onClick={handleClick}
          />
        </div>
      </div>
    );
}
