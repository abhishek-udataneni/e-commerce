import {takeEvery,call,fork,put,takeLatest,take} from "redux-saga/effects";
import * as actions from "../actions/books";
import * as api from "../api/books";
function* getBooks(action){
    try{
        const result = yield call(api.getBooks,action.payload.searchText);
        yield put(actions.getBooksSuccess({
            items : result.data
        }))
    }catch(e){
        // yield put(actions.booksError({
        //     error : "erroe occoured"
        // }))
    }
}



function* watchGetBooksRequest(){
    yield takeEvery(actions.Types.GET_BOOKS_REQUEST, getBooks)
}

const booksSagas = [
    fork(watchGetBooksRequest),
]

export default booksSagas;