import { BUY_ITEM,UPDATE_CARTITEM,REMOVE_CARTITEM } from "../constants/actionTypes";
import { LOCAL_STORAGE_NAME } from "../constants/localStorage";

// chưa chọn mua hàng
let initialState = [];
// đã mua hàng, lấy từ localStorage
const shoppingCartLocal = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME));
initialState = (shoppingCartLocal !=null && shoppingCartLocal.length>0)?shoppingCartLocal:initialState;
const getIndexByProduct = (listProduct,product)=>{
    console.log("get:",listProduct,product);
    for (let index = 0; index < listProduct.length; index++) {
        if(listProduct[index].product.productId === product.productId){
            return index;
        }
    }
    return -1;
}
const cart =(state=initialState, action)=>{
    let {product,quantity} =action;
    let item ={product,quantity};
    let index=-1;
    switch(action.type){
        case BUY_ITEM:
            if(state.length===0){
                state.push(item);
            }else{
                // Khách hàng đã mua hàng, giỏ hàng đã có sản phẩm
                // kiểm tra xem có sản phẩm trong giở hàng chưa
                 index = getIndexByProduct(state,product);
                console.log("index:",index);
                if(index>=0){
                    // sản phẩm đã có trong giỏ hàng, thực hiện tăng số lượng
                    console.log("if-index");
                    state[index].quantity = parseInt(state[index].quantity) + parseInt(quantity);

                }else{
                    // sản phẩm chưa có trong giỏ hàng
                    state.push(item);
                }
            }
            //Lưu giỏ hàng vào local storage
            localStorage.setItem(LOCAL_STORAGE_NAME,JSON.stringify(state));
            return [...state];
        case UPDATE_CARTITEM:
            index = getIndexByProduct(state,product);
            if(index>=0){
                //Thực hiện cập nhật
                state[index].quantity = parseInt(quantity);
            }
            //Lưu giỏ hàng vào local storage
            localStorage.setItem(LOCAL_STORAGE_NAME,JSON.stringify(state));
            return [...state];
        case REMOVE_CARTITEM:
            index = getIndexByProduct(state,product);
            if(index>=0){
                // thực hiện xóa
                state.splice(index,1);
            }
            //Lưu giỏ hàng vào local storage
            localStorage.setItem(LOCAL_STORAGE_NAME,JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
}
export default cart;