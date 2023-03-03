import {React, useEffect, useState} from 'react';
function ExUseEffect(){

    
    // Trường hợp 1: useEffect(callBackFunction)
    // => Được gọi khi component được mount hoặc re-render
    // useEffect(()=>{
    //     console.log("Được gọi khi component được mount hoặc re-render");
    // })
    // Trường hợp 2: useEffect(callback,[])
    // => được gọi khi component được mount 
    // useEffect(()=>{
    //     console.log("Được gọi khi component được mount");
    // },[])
    // Trường hợp 3: useEffect(callback,[deps])
    // Được gọi khi component được mount vầ khi có sự phụ thuộc thay đổi [deps]
    const [count, setCount] = useState(10);
    const handleClick =()=>{
        setCount(count+1);
    }

    useEffect(()=>{
        console.log("Được gọi khi component được mount vầ khi có sự phụ thuộc thay đổi [deps]",count);
    },[count])

    return(
        <div>
            <h1> Sử dụng useEffect</h1>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Click here</button>
        </div>
    )

}
export default ExUseEffect;