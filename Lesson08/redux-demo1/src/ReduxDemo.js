
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


    return state; // state mới
}

// tạo store từ reducer
const store = createStore(reducer);

// Lấy dữ liệu từ store và hiển thị
console.log(store);

// lấy dữ liệu từ store sử dụng getState
console.log("initial State");
console.log(store.getState());



export default reducer;