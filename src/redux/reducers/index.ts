import { combineReducers } from 'redux';
import { aboutReducer } from './about.reducer'
import { cursorReducer } from './cursor.reducer'

export default combineReducers({
    aboutReducer,
    cursorReducer
})