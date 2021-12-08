import { combineReducers } from 'redux';
import title from './titleReducer'
import dragon from './dragonReducer';

const rootReducer = combineReducers({
    titleReducer: title,
    dragonReducer: dragon
})

export default rootReducer;