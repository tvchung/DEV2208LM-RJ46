import {React, Component} from "react";
class Member extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"Quang Tèo",
            age:20
        }
    }
    handleChangeName = ()=>{
        this.setState({
            name:"Mai Quang Tí"
        })
    }

    render(){
        return(
            <div>
                <h2>Member name: {this.state.name}</h2>
                <h3>Member age: {this.state.age}</h3>
                <button onClick={this.handleChangeName}>Change Member Name</button>
            </div>
        );
    }
}
export default Member;