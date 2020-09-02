import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "60753ccc-207d-4dc7-9b94-23490ca68361"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    unFollow(id)  {
        return instance.delete(`follow/${id}`)
    },
    follow(id)  {
        return instance.post(`follow/${id}`, {})
    },
    auth() {
        return instance.get(`auth/me`)
    }
}