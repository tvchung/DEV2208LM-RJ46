import {combineReducers} from 'redux';
import listProduct from './listProduct';
import notify from './notify';
import cart from './cart';

const reducer = combineReducers({
    listProduct: listProduct,
    cart: cart,
    notify: notify
});
export default reducer;