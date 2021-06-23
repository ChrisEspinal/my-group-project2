const Cart = (state = 0, action) => {
    switch(action.type){
        case "addToCart":
            return state + 1;
        case "removeFromCart":
            if(state >0){
                return state -1;
            }else return state;
    }
}

export default Cart

/**
 * imports for file
 * import {incCart, decCart} from './indexAction'
 * import {useSelector, useDispatch} from 'react-redux';
 * 
 * assign variables inside functional component
 * itemCart will be to display the amunt of items in cart
 * const itemCart = useSelector((state)=> state.Cart)
 * const dispatch = useDispatch();
 * 
 * button clicks for incrementing and decrementing ammount in cart
 * onClick={() => dispatch(incCart)}
 * onClick={() => dispatch(decCart)}
 */

