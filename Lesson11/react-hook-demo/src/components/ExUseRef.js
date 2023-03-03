import React from "react";
import { useRef, useState } from "react";

function ExUseRef(){
    const [time, setTime] = useState(60);
    let timeId = useRef();
    const handleStart=()=>{
        timeId.current = setInterval(()=>{
            setTime(prevTime => prevTime - 1)
        },1000);
        console.log("Start==>",timeId);
    }
    const handleStop =()=>{
        clearInterval(timeId.current);
        console.log("Stop==>",timeId);
    }
    return(
        <div>
            <h2>Devmaster - React Hook - useRef Demo</h2>
            <p>Current time:{time}</p>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default ExUseRef;