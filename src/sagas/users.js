import {takeEvery,call,fork,put,takeLatest,take} from "redux-saga/effects";
import * as actions from "../actions/users";
import * as api from "../api/users";
function* getUsers(action){
    try{
        const result = yield call(api.getUsers,action.payload.searchText);
        yield put(actions.getUsersSuccess({
            items : result.data
        }))
    }catch(e){
        // yield put(actions.usersError({
        //     error : "erroe occoured"
        // }))
    }
}



function* watchGetUsersRequest(){
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers)
}

const usersSagas = [
    fork(watchGetUsersRequest),
]

export default usersSagas;