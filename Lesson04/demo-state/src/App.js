import "./App.css";
import { React, Component } from "react";
import Member from "./Member";
class App extends Component {
  constructor(props) {
    super(props);
    // Khởi tạo đối tượng state
    this.state = {
      name:"Chung Trịnh",
      age:45
    }
  }

  // Khi người dùng click vào button
  // Thực hiện thay đổi name trong state
  handleChangeName = ()=>{
    // cập nhât lại name trong state
    this.setState({
      name:"Devmaster Academy"
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Xin chào, {this.state.name}</h1>
        <p>Tuổi của bạn là {this.state.age}</p>
        <hr/>
        <button onClick={this.handleChangeName}> Change Name</button>
        <hr/>
        <Member/>
      </div>
    );
  }
}

export default App;
