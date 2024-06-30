import { createStore } from 'redux';
import rootReducer from './Reducer';

const Store = createStore(rootReducer);

export default Store;
