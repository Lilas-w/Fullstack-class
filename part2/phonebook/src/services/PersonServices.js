import axios from "axios";

const baseUrl = '/api/persons'

const getAll = () => {
    const promise = axios.get(baseUrl)
    return promise.then(res => res.data)
}

const create = (newObj) => {
    const promise = axios.post(baseUrl, newObj)
    return promise.then(res => res.data)
}

const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

const update = (id, changed) => {
    const promise = axios.put(`${baseUrl}/${id}`, changed)  //注意和delete一样，都是更改对应资源的 URL 
    return promise.then(res => res.data)
}

export default { getAll, create, remove, update };