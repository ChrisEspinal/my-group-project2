import {combineReducers} from 'redux'
import LoggedIn from './loggedIn'
import cart from './cart'

const reducers =combineReducers({
    LoggedIn,
    Cart
})

export default reducers;