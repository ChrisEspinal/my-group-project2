export const logIn = (username) =>{
    return{
        type: "log-in",
        payload: username,
    };
}

export const logOut = () =>{
    return{
        type: "log-out"
    }
}

export const incCart = () =>{
    return{
        type: "addToCart"
    }
}

export const decCart = () => {
    return{
        type: "removeFromCart"
    }
}

export const add_item = (newItem) =>{
    return{
        type: "add_item",
        newItem: newItem,
        amount: 1,
    };
}
