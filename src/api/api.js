import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '7469f5d9-ffd4-4215-a259-761962732f35'
    }
})

export const usersAPI = {
    getUsers(currentPage=1,pageSize=10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    }
}

export const authAPI = {
    isAuth(){
        return instance.get('auth/me')
        .then(response => response.data);
    }
}

export const followAPI = {
    follow(userID){
        return instance.post(`follow/${userID}`)
            .then(response => response.data);
    },
    unfollow(userID){
        return instance.delete(`follow/${userID}`)
            .then(response => response.data);
    }
}

export const profileAPI = {
    getProfile(userID){
        return instance.get(`profile/${userID}`)
            .then(response => response.data);
    }
}
                                