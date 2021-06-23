const LoggedIn = (state= false, action)  =>{
    switch(action.type){
        case "log-in":
            return state = true;
        
        case "log-out":
            return state = false;
        
        default:
            return state;
    }
}

export default LoggedIn;