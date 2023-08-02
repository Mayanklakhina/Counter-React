import React, {useState} from "react";
import './conditionals.css'

function Conditionals(){
    const [backgroundcolor, setBackgroundColor] = useState('white');
    const [count, setCount] = useState(0);
    const [buttoncolor, setButtonColor] = useState('black')

    // with if else statements
    const increment = ()=>{
            setCount((prev)=> prev+1);
            if (count % 2 === 0) {
                setBackgroundColor('purple');
              } else {
                setBackgroundColor('lightpink');
              }

              if (count % 2 === 0) {
                setButtonColor('brown');
              } else {
                setButtonColor('green');
              }
        }

    // with ternary operator

    // const increment = ()=>{
    //     setCount((prev)=> prev+1);
    //     console.log(count);
        
    //     setBackgroundColor(count%2===0 ? 'lightgreen' : 'lightblue')
    //     setButtonColor(count%2===0 ? 'maroon' : 'orange')
    //     console.log("Mayank")
    // }
    return(
        <div>
        <div className="div1" style={{ backgroundColor:backgroundcolor }}>
            <button className="btn" onClick={increment} style={{backgroundColor : buttoncolor}}>Click</button>
        </div>

        </div>
    )
}

export default Conditionals;