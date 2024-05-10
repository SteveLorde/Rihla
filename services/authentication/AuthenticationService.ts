import {IAuthenticationService} from "@/services/authentication/IAuthenticationService";
import axios from "axios"
import {LoginRequest} from "@/data/models/LoginRequest";
import {backendURL} from "@/services/API";
import {RegisterRequest} from "@/data/models/RegisterRequest";
import {User} from "@/data/models/User";

export class AuthenticationService implements IAuthenticationService{
    constructor() {}

    isLoggedIn : boolean = false

    customHeaders = {
        'Authorization': `Bearer ${localStorage.getItem('usertoken')}`
    };

    async Login(loginReq : LoginRequest) {
        return await axios.post<boolean>(`${backendURL}/authentication/login`, loginReq).then(res => {
            this.isLoggedIn = true
            return res.data
        })
    }

    async Register(registerReq : RegisterRequest) {
        return await axios.post<boolean>(`${backendURL}/authentication/register`, registerReq).then(res => res.data)
    }

    async GetActiveUser() {
        return await axios.get<User>(`${backendURL}/authentication/getuser`, {headers: this.customHeaders}).then(res => res.data)
    }
}