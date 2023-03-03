import { React, Component } from "react";
import {connect} from 'react-redux';
class Notify extends Component {
  render() {
    return <label className="alert alert-secondary w-100">
      {this.props.notify}
    </label>;
  }
}
const mapStateToProps=(state)=>{
  return{
    notify:state.notify
  }
}
export default connect(mapStateToProps,null) (Notify);
