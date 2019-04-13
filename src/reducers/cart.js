import {Types} from "../actions/cart";

const INITIAL_STATE = {
    items : {},
}

export default function cart(state = INITIAL_STATE,action){
    switch(action.type){
        case Types.ADD_ITEM_TO_CART: {
            if(state.items[action.payload.itemId]){
                return {  
                    ...state,
                    items : {...state.items,[action.payload.itemId]:state.items[action.payload.itemId]+1},
                  } 
            }else{
                return {  
                    ...state,
                    items : {...state.items,[action.payload.itemId]:1}    
                  }
            }
         
        }
        default: {
            return state;
        }
    }
}