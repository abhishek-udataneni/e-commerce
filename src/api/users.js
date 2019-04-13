import axios from "axios";

export const getUsers = (searchText) => {
    if(!searchText){
        searchText="harry-potter"
    }
    return axios.get(searchText)
}

export const createUser = ({firstName,lastName}) => {
    return axios.post("/users",{
        firstName,
        lastName
    })
}

export const deleteUser = (userId) => {
    return axios.delete(`/users/${userId}`)
}