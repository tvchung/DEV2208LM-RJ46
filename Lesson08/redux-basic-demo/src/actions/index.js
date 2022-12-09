import * as types from '../constants';

// action khi người dùng thay đổi trên ô input -> UserNane
export const actChangeUserName=(value)=>{
    return{
        type:types.CHANGE_USERNAME, // Change/UserName
        data:value
    }
}

// action khi người dùng thay đổi trên CourseName
export const actChangeCourseName=(value)=>{
    return{
        type:types.CHANGE_COURSENAME, // Change/CourseName
        data:value
    }
}