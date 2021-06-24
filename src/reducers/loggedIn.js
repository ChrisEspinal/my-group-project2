const LoggedIn = (state= false, action)  =>{
    // console.log("here");
    switch(action.type){
        case "log-in":
            return state = {login: true, 
                            username: action.payload};
        
        case "log-out":
            return state = {login: false};
        
        default:
            return state;
    }
}

export default LoggedIn;