import { React, Component } from "react";
import WelcomeRedux from "./components/WelcomeRedux";
import {connect} from 'react-redux';
import { actChangeCourseName, actChangeUserName } from "./actions";
class App extends Component {
  handleChangeUserName = (e)=>{
    this.props.changeUserName(e.target.value);
  }
  handleChangeCoursName =(e)=>{
    this.props.changeCourseName(e.target.value);
  }
  render() {
    return (
      <div className="container">
        <h1>Welcome to Redux</h1>
        <div className="row">
          <div className="col-12">
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Change UserName
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                onChange={this.handleChangeUserName}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Change CourseName
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                onChange={this.handleChangeCoursName}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <WelcomeRedux/>
          </div>
        </div>
      </div>
    );
  }
}

// mapDispathToProps thực hiện bắn các action vào store
const mapDispathToProps = (dispatch)=>{
  return {
    changeUserName:(value)=>{
      dispatch(actChangeUserName(value));
    },
    changeCourseName:(value)=>{
      dispatch(actChangeCourseName(value));
    }
  }
}

export default connect(null,mapDispathToProps)(App);
