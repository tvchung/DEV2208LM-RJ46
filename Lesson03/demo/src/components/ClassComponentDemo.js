import {React, Component } from 'react';
class ClassCompDemo extends Component{
    render(){
        let {age}=this.props;
        return(
            <div>
                <h1> Class Component: 
                    {this.props.name}</h1>
                <p>Tài khoản: 
                    {this.props.userName}</p>
                <h5>Tuổi: {age}</h5>
            </div>
        );
    }
}
export default ClassCompDemo;