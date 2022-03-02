import axios from "axios";

const baseURL = "https://react-first-project-6571f-default-rtdb.firebaseio.com/";

export const getUsers = () => {
   return axios.get(baseURL + 'users.json?orderBy="id"&limitToFirst=5&print=pretty')
       .then(response => response.data)
}

export const getUsers2 = (pageNumber, pageSize) => {
    return axios.get(baseURL + `users.json?orderBy="id"&startAt=${(pageNumber*pageSize)-4}&endAt=${pageNumber*pageSize}&print=pretty`)
        .then(response => response.data)
}