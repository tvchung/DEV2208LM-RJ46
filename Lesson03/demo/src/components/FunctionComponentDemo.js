import React from 'react';
// function component demo
function FunCompDemo(props){
    let {name, userName, company} = props;
    return (
        <div>
            <h1>Xin chào {props.name}</h1>
            <p>Tài khoản đăng nhập của bạn là 
                {props.userName}</p>
            <h2>Welcome to, {name}</h2>
            <h3>UserName: {userName}</h3>
            <p> Company: {company}</p>
        </div>
    );
}
export default FunCompDemo;