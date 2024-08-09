import * as requester from './requester';

const baseUrl = 'http://localhost:3030/users';


export const register = async (data) => {
    return await requester.post(`${baseUrl}/register`, data)
}

export const login = async (data) => {
    const authData = await requester.post(`${baseUrl}/login`, data)
    return authData
}

export const logout = () => request.get(`${baseUrl}/logout`)


// import { authState } from '../state/authState';

// export const login = async (data) => {
//     const response = await requester.post(`${baseUrl}/login`, data);
//     authState.email = response.email;
//     authState.token = response.token;
//     // You can save other data from the response as needed
//     return response;
// }