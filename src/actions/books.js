export const Types = {
    GET_BOOKS_REQUEST :'books/get_books_request',
    GET_BOOKS_SUCCESS :'books/get_books_success',
    // BOOKS_ERROR : 'books/book_error'
}

export const getBooksRequest = (searchText) => {
    return ({
    type: Types.GET_BOOKS_REQUEST,
    payload:{
        searchText
    }
})}

export const getBooksSuccess = ({items}) => ({
    type : Types.GET_BOOKS_SUCCESS,
    payload : {
        items
        }
})