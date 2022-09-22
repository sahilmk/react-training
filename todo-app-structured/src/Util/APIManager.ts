import axios from "axios";
import { dataTypes } from "../Models";

const getMethod = (url: string) => {
    return axios.get(url.replace(':userId', '')).
        then((response) => response.data);
}

const putMethod = (url: string, id: string) => {
    return axios.put(url.replace(':userId', id));
}

const postMethod = (url: string, data: dataTypes[]) => {
    return axios.post(url.replace(':userId', ''), data)
}

export { getMethod, putMethod, postMethod };