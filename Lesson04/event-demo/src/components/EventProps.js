import {React, Component} from "react";

class EventProps extends Component{
    constructor(props){
        super(props);

        // state
        this.state = {
            company:"Viện Công Nghệ và Đào Tạo Devmaster",
        }
    }
    handleClick1 = ()=>{
        alert(this.props.name1);
    }
    handleClick2 =()=>{
        alert(this.state.company);
    }
    render(){
        return(
            <div>
                <hr/>
                <h2>Event - Props</h2>
                <button onClick={this.handleClick1}> Event Props</button>
                <button onClick={()=>this.handleClick2()}>Event State</button>
            </div>
        );
    }
}

export default EventProps;