import dragonReducer from './dragonReducer';
import titleReducer from './dragonReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    dragon: dragonReducer,
    title: titleReducer
});
