import { CHANGE_NOTIFY } from "../constants/actionTypes";
import { MSG_INFOR } from "../constants/messages";

const initialState = MSG_INFOR;
const notify = (state=initialState, action)=>{
    switch(action.type){
        case CHANGE_NOTIFY:
            state = action.content;
            return state;
        default:
            return state; 
    }
}
export default notify;