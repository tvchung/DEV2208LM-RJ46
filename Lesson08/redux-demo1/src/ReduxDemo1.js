
/* 1.
// tạo một reducer
const reducer = "Devmaster Academy";

// hiển thị trong console 
console.log(reducer);
*/
// 2. Thực hiện thay đổi state
// import createStore từ redux
import {createStore} from 'redux';
// tạo reducer từ state và action
// input: old state, action
// output: return new state

// khởi tạo state
const initialState={
    userName:"Chung Trịnh",
    courseName:"Devmaster ReactJs",
}

// tạo reducer 
const reducer = (state = initialState, action)=>{
    // tiếp nhận action và thực hiện cập nhật state
    switch(action.type){
        case "CHANGE_USERNAME":
            state.userName=action.userNameNew
            break;
        case "CHANGE_COURSENAME":
            state.courseName=action.courseNameNew
            break;
        default:
            return state;
    }

    return state; // state mới
}

// tạo store từ reducer
const store = createStore(reducer);

// Lấy dữ liệu từ store và hiển thị
console.log(store);

// lấy dữ liệu từ store sử dụng getState
console.log("initial State");
console.log(store.getState());

// thực hiện cập nhật state của store
// userName
const actChangeUserName = ()=>{
    return{
        type:"CHANGE_USERNAME",
        userNameNew:"User name mới - Devmaster",
    }
}
// bắn action từ component lên store để thực hiện cập nhật state
store.dispatch(actChangeUserName()); // viết lại reducer
// hiện thị trên consle
console.log("Change user name:", store.getState());

// thực hiện cập nhật state của store
// courseName
const actChangeCourseName = ()=>{
    return{
        type:"CHANGE_COURSENAME",
        courseNameNew:"ReactJs - Redux Demo",
    }
}
// bắn action từ component lên store để thực hiện cập nhật state
store.dispatch(actChangeCourseName()); // viết lại reducer
// hiện thị trên consle
console.log("Change course name:", store.getState());

export default reducer;