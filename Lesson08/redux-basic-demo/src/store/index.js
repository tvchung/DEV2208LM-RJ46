import {createStore} from 'redux';
import rootReducer from '../reducers';
// tạo store
export const store = createStore(rootReducer);