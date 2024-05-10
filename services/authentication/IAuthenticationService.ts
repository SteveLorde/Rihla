import {User} from "@/data/models/User";
import {LoginRequest} from "@/data/models/LoginRequest";
import {RegisterRequest} from "@/data/models/RegisterRequest";

export interface IAuthenticationService {
    isLoggedIn : boolean
    Login(loginRequest : LoginRequest): Promise<boolean>
    Register(registerRequest: RegisterRequest): Promise<boolean>
    GetActiveUser(): Promise<User>
}