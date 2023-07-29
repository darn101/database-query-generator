import axios from 'axios';

const URL = 'http://localhost:8000';

export const AuthenticateSignUp = async (data) => {
    try {
        return await axios.post(`${URL}/signup`, data);
    }
    catch (error) {
        console.log('Error while signing up', error);
    }
}

export const AuthenticateLogin = async (data) => {
    try {
        return await axios.post(`${URL}/login`, data);
    }
    catch (error) {
        console.log('Error while logging in', error);
    }
}

export const SaveContact = async (data) => {
    try {
        return await axios.post(`${URL}/send`, data);
    }
    catch (error) {
        console.log('Error while sending contact', error);
    }
}