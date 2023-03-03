// Sử dụng useState của Hook

import {React, useState} from 'react';

function ExUseState(){
    // useState

    const lists = ['arr1','arr2'];
    // Truyền 1 giá trị
    const [count, setCount] = useState(0);

    // Truyền 1 danh sách
    const [list, setList] = useState(lists);

    const handleCount =()=>{
        setCount(count+1);
    }

   const handleList =()=>{
        setList([
            ...list,
            parseInt(Math.random()*1000)
        ])
    }

    
    return(
        <div>
            <h1>Tìm hiều về useState</h1>
            <div>
                <p> Your click {count}</p>
                <p>List:{list.toString()}</p>
            </div>
            <div>
                <button onClick={handleCount}>Click Count</button>
                <button onClick={handleList}> Click List </button>
            </div>
        </div>
    );
}

export default ExUseState;