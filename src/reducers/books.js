import {Types} from "../actions/books";

const INITIAL_STATE = {
    items : {},
    error: "",
    isDataLoaded: false   
}

export default function books(state = INITIAL_STATE,action){
    switch(action.type){
        case Types.GET_BOOKS_SUCCESS: {
          return {  
              ...state,
              items : action.payload.items,
              isDataLoaded: true  
            }
        }
        case Types.BOOKS_ERROR: {
            console.log('====================================');
            console.log(action.payload.error);
            console.log('====================================');
            return {  
                ...state,
                error : action.payload.error
              }
          }
        default: {
            return state;
        }
    }
}