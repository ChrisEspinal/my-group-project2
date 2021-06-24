import {combineReducers} from 'redux'
import LoggedIn from './loggedIn'
import Cart from './cart'
import Items from './items'

const reducers =combineReducers({
    LoggedIn,
    Cart,
    Items,
})

export default reducers;