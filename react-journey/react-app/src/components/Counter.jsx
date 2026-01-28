const Counter = ({count, onIncrease,onDecrease,Reset}) =>{
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={onIncrease}>Increase</button>
            
            <button onClick={onDecrease}>Decrease</button>
            <button onClick={Reset}> Reset button</button>
        </div>
    )
}

export default Counter