import {combineReducers} from 'redux'
import authReducer from './auth'
import currentUserReducer from './currentUser'
import questionReducer from './questions.js'
import allUserReducer from './AllUsers'

export default combineReducers({
    authReducer, currentUserReducer, questionReducer, allUserReducer
})