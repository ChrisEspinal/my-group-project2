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
        
    };
}
export const remove_item = (newItem,id) =>{
    return{
        type: "remove_item",
        newItem: newItem,
        id: id
    };
}
