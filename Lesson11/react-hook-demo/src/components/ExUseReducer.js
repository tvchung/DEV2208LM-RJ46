import React from "react";
import { useReducer } from "react";
// khởi tạo giá trị state
const initialState=0;
// các action tương tác làm thay đổi state
const UP_ACTION = "UP";
const DOWN_ACTION = "DOWN";

// khởi tạo reducer
const reducer = (state=initialState, action)=>{
    switch(action){
        case UP_ACTION:
            return state+1
        case DOWN_ACTION:
            return state-1;
        default:
            return state
    }
}
function ExUseReducer(){
    const [count, dispatch] = useReducer(reducer, initialState);
    const handleUp=()=>{
        dispatch(UP_ACTION);
    }
    const handleDown =()=>{
        dispatch(DOWN_ACTION);
    }
    return(
        <div>
            <h2>Devmaster - react hook - useReducer demo</h2>
            <h2>Current count:{count}</h2>
            <button onClick={handleUp}>UP</button>
            <button onClick={handleDown}>DOWN</button>
        </div>
    )
}
export default ExUseReducer;
