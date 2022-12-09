import {React,Component} from 'react';
import {connect} from 'react-redux'; 
// connect: dùng để kết nối state trog store với props trên component
class WelcomeRedux extends Component{

    render(){
        return (
            <div>
                <h2> Xin chào, <span className='btn btn-danger'>{this.props.userName}</span></h2>
                <h3>Chào mừng bạn đến với khóa học,
                    <span className='btn btn-success'>{this.props.courseName}</span>
                    tại Devmaster Academy
                </h3>
            </div>
        )
    }
}

// hàm map state trong store với props
const mapStateToProps = (state)=>{
    return{
        userName:state.userName,
        courseName:state.courseName
    }
}

// export default WelcomeRedux;
export default connect(mapStateToProps,null)(WelcomeRedux);