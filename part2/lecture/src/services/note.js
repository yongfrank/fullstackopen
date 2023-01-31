/*
 * @Author: Frank Chu
 * @Date: 2023-01-29 14:25:46
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-01-29 16:08:18
 * @FilePath: /fullstackopen/part2/lecture/src/services/note.js
 * @Description:
 * 
 * Copyright (c) 2023 by Frank Chu, All Rights Reserved. 
 */

import axios from 'axios';
const baseUrl = 'http://localhost:3001/notes';

const getAll = async () => {
    // We could take our implementation a step further. When the App component uses the functions, 
    // it receives an object that contains the entire response for the HTTP request:
    // The App component only uses the response.data property of the response object.
    const nonExisting = {
        id: 10000,
        content: 'This note is not saved to server',
        important: true,
    }

    const request = axios.get(baseUrl)
    const response = await request;
    return response.data.concat(nonExisting);
}

const create = newObject => {
    return axios.post(baseUrl, newObject);
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}

// eslint-disable-next-line
// You need to assign the object to a variable before exporting it as default.
// https://stackoverflow.com/questions/65738988/assign-object-to-a-variable-before-exporting-as-module-default-warning
const exportedObject = { getAll, create, update }
export default exportedObject
