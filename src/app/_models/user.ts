export interface User {
    id: number;
    firstname: string;
    middlename: string;
    lastname: string;
    email: string;
    mobile: string;
    country: string;
    password: string;
}

export interface AuthResponse {
    token: string;
    user: User;
}