import {Types} from "../actions/users";

const INITIAL_STATE = {
    items : {},
    error: "",
    isDataLoaded: false   
}

export default function users(state = INITIAL_STATE,action){
    switch(action.type){
        case Types.GET_USERS_SUCCESS: {
          return {  
              ...state,
              items : action.payload.items,
              isDataLoaded: true  
            }
        }
        case Types.USERS_ERROR: {
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