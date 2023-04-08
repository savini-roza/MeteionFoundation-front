import axios from 'axios';
import http from "./Provider";

export function login(username, password) {
    return axios.post(http + "/login", {Username: username, Password: password});
}

export function newUser(username, password) {
    return axios.post(http + "/api/users", {Username: username, Password: password});
}