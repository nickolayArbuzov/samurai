import * as axios from 'axios';
import apiKey 

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': apiKey,
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
        return instance.get('auth/me');
    },
    login(email, password, rememberMe = false, captcha = null){
        return instance.post('auth/login', {
            email, password, rememberMe, captcha
        });
    },
    logout(){
        return instance.delete('auth/login');
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
        return instance.put(`profile/status/`, {status: status})
    },
    savePhoto(photoFile){
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile){
        return instance.put(`profile`, profile)
    }
}

export const securityAPI = {
    getCaptchaUrl(){
        return instance.get(`security/get-captcha-url`);
    }
}
