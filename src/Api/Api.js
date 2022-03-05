import axios from "axios";

const instance = axios.create({
    baseURL: "https://react-first-project-6571f-default-rtdb.firebaseio.com/"
})

export const usersAPI = {
    getUsers() {
        return instance.get('users.json?orderBy="id"&limitToFirst=5&print=pretty')
            .then(response => response.data)
    },
    getUsers2 (pageNumber, pageSize) {
        return instance.get(`users.json?orderBy="id"&startAt=${(pageNumber*pageSize)-4}&endAt=${pageNumber*pageSize}&print=pretty`)
            .then(response => response.data)
    }
}