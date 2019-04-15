import {Types} from "../actions/books";

const INITIAL_STATE = {
    items : {},
    error: "",
    isDataLoaded: false,
    loading:false 
}

export default function books(state = INITIAL_STATE,action){
    switch(action.type){
        case Types.GET_BOOKS_REQUEST: {
            return {  
                ...state,
               loading:true
              }
          }
        case Types.GET_BOOKS_SUCCESS: {
          return {  
              ...state,
              items : action.payload.items,
              loading:false,
              isDataLoaded: true
            }
        }
        case Types.BOOKS_ERROR: {
            return {  
                ...state,
                error : action.payload.error,
                loading:false
              }
          }
        default: {
            return state;
        }
    }
}