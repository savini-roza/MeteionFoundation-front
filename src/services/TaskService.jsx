import axios from 'axios';
import http from "./Provider";

export function getByUser(userId) {
    return axios.get(http + "/api/tasks/" + userId);
}

export function addTask(userId, taskName) {
    return axios.post(http + "/api/tasks", {UserId: userId, TaskName: taskName});
}

export function editTask(id, userId, taskName) {
    return axios.put(http + "/api/tasks", {Id: id, userId: userId, TaskName: taskName});
}

export function deleteTask(id) {
    return axios.delete(http + "/api/tasks/" + id);
}
