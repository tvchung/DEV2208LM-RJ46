import './App.css';
import {React, Component} from "react";
import EventProps from './components/EventProps';
import FromControlled from './components/FromControlled';
class App extends Component {

  // function
  handleClick1 = ()=>{
    alert("Click Button 1");
  }
  handleClick2 = ()=>{
    alert("Click Button 2");
  }
  
  // function parameter
  handleClick3 = (content)=>{
    alert(content);
  }

  render(){
    return (
      <div className="App">
        <h1> Event Demo</h1>
        <hr/>
        {/* thực hiện khi render  */}
        {/* <button onClick={this.handleClick1()}>Button 1</button> */}
        {/* thực hiện khi click  */}
        <button onClick={this.handleClick2}>Button 2</button>

        {/* thực hiện gọi hàm khi có tham số  */}
        <button onClick={()=>this.handleClick3("Chung Trịnh Văn")}>Button 3</button>

        <EventProps name1="Devmaster Academy" />
        <h2>Form Controlled</h2>
        <FromControlled />
      </div>
    );
  }
}

export default App;
