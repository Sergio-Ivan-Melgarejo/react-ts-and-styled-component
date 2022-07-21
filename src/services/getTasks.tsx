import { API_ENPOINT } from "../conf-api/conf";

/**
 * 
 * @returns array of tasks
 * 
 * function for get task from api
 */

function getTasks () {
    return fetch(`${API_ENPOINT}/tasks`)
    .then((res) => res.json())
}

export default getTasks;
