import * as types from "../constants";

const initialState = {
  userName: "Redux-Demo-hahahahah",
  courseName: "Redux-ReactJs",
};

const rootReducer = (state = initialState, action) => {
  // thực hiện cập nhật state khi có action
  switch (action.type) {
    case types.CHANGE_USERNAME:
      return {
        ...state, // sao chép lại state cũ
        userName: action.data, // cập nhật lại userName, dữ liệu từ action đầy vào
      };
    case types.CHANGE_COURSENAME:
      return {
        ...state, // sao chép lại state cũ
        courseName: action.data, // cập nhật lại courseName, dữ liệu từ action đầy vào
      };
    default:
      return state;
  }
}
export default rootReducer;
