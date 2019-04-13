import {takeEvery,call,fork,put,takeLatest,take} from "redux-saga/effects";
import * as actions from "../actions/users";
import * as api from "../api/users";
function* getUsers(action){
    debugger
    try{
        const result = yield call(api.getUsers,action.payload.searchText);
        yield put(actions.getUsersSuccess({
            items : result.data
        }))
    }catch(e){
        yield put(actions.usersError({
            error : "erroe occoured"
        }))
    }
}

function* createUser(action){
    try{
        const result = yield call(api.createUser,{ firstName:action.payload.firstName, lastName:action.payload.lastName});
        yield call(getUsers)
        // yield put(actions.getUsersSuccess({
        //     items : result.data.data
        // }))
    }catch(e){
        yield put(actions.usersError({
            error : "erroe occoured"
        }))
    }
}
function* deleteUser({userId}){
    try{
        const result = yield call(api.deleteUser,userId);
        yield call(getUsers)
        // yield put(actions.getUsersSuccess({
        //     items : result.data.data
        // }))
    }catch(e){
        yield put(actions.usersError({
            error : "erroe occoured"
        }))
    }
}
function* watchGetUsersRequest(){
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers)
}
function* watchCreateUserRequest(){
    yield takeLatest(actions.Types.CREATE_USER_REQUEST,createUser)
}
function* watchDeleteUserRequest(){
    while(true){
       const action = yield take(actions.Types.DELETE_USER_REQUEST);
       yield call(deleteUser,{
           userId : action.payload.userId
       })
    }
}
const usersSagas = [
    fork(watchGetUsersRequest),
    fork(watchCreateUserRequest),
    fork(watchDeleteUserRequest)
]

export default usersSagas;