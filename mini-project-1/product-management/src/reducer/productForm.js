import { PRODUCT_EDIT, PRODUCT_UPDATE, PRODUCT_VIEW } from "../constants/actionTypes";
import listProduct from "./listProduct";
const initialState = {
    listProduct:listProduct,
    product:{},
    actionName:''
};
const productForm = (state=initialState, action)=>{
    
    switch(action.type){
        case PRODUCT_VIEW:
            state.product=action.product;
            state.actionName=action.type;
            
            return Object.assign({},state);
        case PRODUCT_EDIT:
            state.product=action.product;
            state.actionName=action.type;
            
            return Object.assign({},state);
        case PRODUCT_UPDATE:
            state.product=action.product;
            for (let index = 0; index < state.listProduct.length; index++) {
                if(state.listProduct[index].productId === action.product.productId){
                    state.listProduct[index]=action.product;
                }
            }
            // state.listProduct = action.listProduct;
            return Object.assign({},state);
        default:
            return Object.assign({},state);
    }
    
}
export default productForm;