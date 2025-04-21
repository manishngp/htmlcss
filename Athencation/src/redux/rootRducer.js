import {combineReducer} from 'redux'
import reducer from './reducer'
import regReducer from './redReducer'
const rootReducer=(combineReducer,{
    loginReducer:reducer,
    regReducer:regReducer
})
export default rootReducer