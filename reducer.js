export const initialstate={
    basket:[],
}

const reducer=(state,action)=>{
    console.log(action)
    
    switch (action.type) {
        case "ADD_TO_CARD":
            return{
                ...state,
                basket:[...state.basket,action] ///basket:[...state.basket,abtion.item]  this is another option
            }
    }
}


export default reducer