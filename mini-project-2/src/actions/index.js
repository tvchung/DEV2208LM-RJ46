import * as types from '../constants/actionTypes';

export const act_Change_Notify = (content)=>{
    return{
        type:types.CHANGE_NOTIFY,
        content
    }
}
export const act_BUY_ITEM = (product,quantity)=>{
    return {
        type:types.BUY_ITEM,
        product,
        quantity
    }
}
export const act_REMOVE_CARTITEM = (product)=>{
    return {
        type:types.REMOVE_CARTITEM,
        product
    }
}
export const act_UPDATE_CARTITEM = (product,quantity)=>{
    return {
        type:types.UPDATE_CARTITEM,
        product,
        quantity
    }
}
