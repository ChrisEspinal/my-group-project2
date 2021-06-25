
const initialUserState = {
    arr:[]
}


const Items = (state =initialUserState, action) =>{
    switch(action.type){
        case "add_item":
            // let oldState =state;
            // console.log(oldState);
            // if(oldState.includes(action.newItem)){
            //     let index = state.findIndex(element => element.item ==action.newItem) 
            //     let newState = state.splice(index,1,{item:action.newItem, amount: action.amount})
            //     return state = newState
                
            // }else{    
                return { 
                ...state,
                arr: [...state.arr, {item: action.newItem}]}
            // }}

        

        default:
            return state;
    }
}

export default Items;