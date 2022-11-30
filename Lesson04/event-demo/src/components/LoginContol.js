import {React, Component} from 'react';

class LoginControl extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:false,
        }
    }
    // login click
    handleLoginClick =()=>{
        this.setState({
            isLoggedIn:true
        })
    }
    // logout
    hanldeLogoutClick =()=>{
        this.setState({
            isLoggedIn:false
        })
    }
    render(){
        const isLoggedIn = this.state.isLoggedIn;
       
        var LoginComp = (props)=>{
            return(
                <div>
                    <h2>Welcome to My App</h2>
                </div>
            );
        }
        var LogoutComp = (props)=>{
            return(
                <div>
                    <h2>Mời bạn đăng nhập!</h2>
                </div>
            )
        }
        var Control = (props)=>{
            let isLoggedIn = props.isLoggedIn;
            console.log("Control:",isLoggedIn);
            if(isLoggedIn){
                return <LoginComp />
            }else{
                return <LogoutComp />
            }
        }
        return(
            <div>
                <Control isLoggedIn={this.state.isLoggedIn}/>
                {
                    isLoggedIn? <input type="button" value="Logout" onClick={this.hanldeLogoutClick} /> 
                    :<input type="button" value="Login" onClick={this.handleLoginClick} />
                }
            </div>
        )
    }
}

export default LoginControl;