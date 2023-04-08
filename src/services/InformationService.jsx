import axios from 'axios';

export function getInfo() {
    return axios.get('https://ffxivcollect.com/api/mounts');
}