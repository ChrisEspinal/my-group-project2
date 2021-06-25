
const initialUserState = {
    arr:[]
}


const Items = (state =initialUserState, action) =>{
    switch(action.type){
        
        case "add_item":{
                
                let newState = {...state, arr: [...state.arr,{item: action.newItem}]}
         
                return newState;
                // { 
                // ...state,
                // arr: [...state.arr, {id : action.newItem}]}
                // }
        }

        default:
            return state;
    }
}

export default Items;