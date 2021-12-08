import { combineReducers } from 'redux';
import titleReducer from './titleReducer'
import dragonReducer from './dragonReducer';

const rootReducer = combineReducers({
    titleReducer,
    dragonReducer
})

export default rootReducer;