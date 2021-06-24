import {combineReducers} from 'redux'
import LoggedIn from './loggedIn'
import Cart from './cart'

const reducers =combineReducers({
    LoggedIn,
    // Cart,
})

export default reducers;