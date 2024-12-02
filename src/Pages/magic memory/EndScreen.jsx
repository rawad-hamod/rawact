

export default function EndScreen ({turns , bestScore})  {
    return (
        <div className="fade-animation">
           <h2>congrajulations you won !</h2>
           <p> turns: {turns}</p>
           <p> bestScore: {bestScore}</p>
        </div>
    )
}


