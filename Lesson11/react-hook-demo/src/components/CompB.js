import {React} from 'react';
import {useContext} from 'react';
import {ThemeContext} from './ExUseContext';
function CompB(){
    const theme = useContext(ThemeContext);
    return(
        <div>
            <h2 className={theme} style={{color:theme}}>
                Viện công nghệ và đào tạo Devmaster
            </h2>
        </div>
    );
}

export default CompB;