import { createStore } from 'redux';
import updateQuantity from './shopReducer';
const store= createStore (updateQuantity);
export default store;
