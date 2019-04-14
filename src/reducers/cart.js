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
        case Types.ADD_ITEM: {
            return {  
                ...state,
                items : {...state.items,[action.payload.itemId]:state.items[action.payload.itemId]+1},
              } 
        }
        case Types.REMOVE_ITEM: {
            if(state.items[action.payload.itemId] !== 1){
                return {  
                    ...state,
                    items : {...state.items,[action.payload.itemId]:state.items[action.payload.itemId]-1},
                  } 
            }else{
                return {
                    ...state,
                    items: Object.keys(state.items).reduce((acc, key) => {
                        if (key !== action.payload.itemId) {
                        return {...acc, [key]: state.items[key]}
                        }
                        return acc;
                    }, {})
            }}
        }
        default: {
            return state;
        }
    }
}