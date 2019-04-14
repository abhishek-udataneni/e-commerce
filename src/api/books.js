import axios from "axios";

export const getBooks = (searchText) => {
    if(!searchText){
        searchText="harry-potter"
    }
    return axios.get(searchText)
}
