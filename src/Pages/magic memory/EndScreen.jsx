

export default function EndScreen ({turns , bestScore})  {
    return (
        <div style={{textAlign:"center"}}>
           <h2>congrajulations you won !</h2>
           <p> turns: {turns}</p>
           <p> bestScore: {bestScore}</p>
        </div>
    )
}


