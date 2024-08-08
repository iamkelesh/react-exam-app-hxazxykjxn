import * as requester from './requester';

const baseUrl = 'http://localhost:3030/users';


export const register =(name, email, password)=>{
    return requester.post(`${baseUrl}/register`, {name, email, password});
}