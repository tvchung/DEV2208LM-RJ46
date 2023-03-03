import { LIST_PRODUCT } from "../constants/actionTypes";

const initialState = [
    {
        productId:"P001"
        ,productName:"IPhone 11"
        ,quantity:15
        ,price:1000
    },
    {
        productId:"P002"
        ,productName:"IPhone 12"
        ,quantity:20
        ,price:1250
    },
    {
        productId:"P003"
        ,productName:"IPhone 13"
        ,quantity:10
        ,price:1500
    },
    {
        productId:"P004"
        ,productName:"IPhone 14"
        ,quantity:15
        ,price:2000
    },
]
const listProduct = (state=initialState, action)=>{
    switch(action.type){
        case LIST_PRODUCT:
            state = action.listProduct;

            console.log("listProduct:", state);
            return Object.assign({},state);
        default:
            return state; 
    }
}
export default listProduct;