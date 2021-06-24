
const initialUserState = {
    arr:[]
}


const Items = (state =initialUserState, action) =>{
    switch(action.type){
        case "add_item":
            return { 
                ...state,
                arr: [...state.arr, action.newItem]
            }

        default:
            return state;
    }
}

export default Items;