import {combineReducers} from 'redux'
import loginReducer from './loginReducer'
import dbReducer from './dbReducer'

export default combineReducers({
    loginReducer,dbReducer
})