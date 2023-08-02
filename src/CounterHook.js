import React, {useState, useEffect} from "react";
import './counterhook.css'

function CounterHook() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("Use effect here! your count is", count);
    })

    const increment = ()=>{
        setCount(count+1);
    }

    const decrement = ()=>{
        setCount(count-1)
    }
    const reset = ()=>{
        setCount(0)
    }

    return(
            <div>
                <h2>Counter : {count} </h2>
                <br />
                <br />

                <button className='increment button1' onClick={increment}>High</button>

                <button className='reset button1 ' onClick={reset}>Reset</button>

                <button className='decrement button1' onClick={decrement}>Low</button>


            </div>
    )
}

export default CounterHook;