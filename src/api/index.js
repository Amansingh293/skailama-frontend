
import axios from 'axios';

export const instance = axios.create({
    baseURL: "http://localhost:3003",
    withcredentials : true,
    headers : {
        'content-type' : 'application/json',
    }
})

