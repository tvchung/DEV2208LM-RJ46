import {React, createContext, useState} from 'react';
import CompA from './CompA';

// khởi tạo Context để chia sẻ dữ liệu giữa các component
export const ThemeContext = createContext();

function ExUseContext(){
    // useState
    const [theme, setTheme] = useState('red');

    // click
    const handleChangeTheme =()=>{
        setTheme(
            (theme==='red')?'green':'black'
        );
    }

    return(
        <ThemeContext.Provider value={theme}>
        <div>
            <h1>sử dụng useContext</h1> 
            <button onClick={handleChangeTheme}> Change Theme</button>
            <CompA />
        </div>
        </ThemeContext.Provider>
    )
}
export default ExUseContext;