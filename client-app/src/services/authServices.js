import * as requester from './requester';

const baseUrl = 'http://localhost:3030/users';


export const register = (data) =>{
    return requester.post(`${baseUrl}/register`, data);
}