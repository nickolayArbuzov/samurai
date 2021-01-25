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
    },
    login(email, password, rememberMe = false){
        return instance.post('auth/login', {
            email, password, rememberMe
        })
        .then(response => response.data);
    },
    logout(){
        return instance.delete('auth/login')
        .then(response => response.data);
    }
}

export const followAPI = {
    follow(userId){
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data);
    },
    updateStatus(status){
        debugger
        return instance.put(`profile/status/`, {status: status})
    }
}
                                