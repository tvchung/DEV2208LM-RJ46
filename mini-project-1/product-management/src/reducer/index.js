import {combineReducers} from 'redux';
import listProduct from './listProduct';
import notify from './notify';
import productForm from './productForm';

const reducer = combineReducers({
    listProduct:listProduct,
    productForm:productForm,
    notify:notify,
});
export default reducer;