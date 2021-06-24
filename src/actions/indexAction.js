export const logIn = () =>{
    return{
        type: "log-in"
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

