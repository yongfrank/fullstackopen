/*
 * @Author: Frank Chu
 * @Date: 2023-01-29 16:24:40
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-01-30 00:09:58
 * @FilePath: /fullstackopen/part2/phonebook/src/services/contacts.js
 * @Description: 
 * 
 * Copyright (c) 2023 by Frank Chu, All Rights Reserved. 
 */
import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request
}

const deletePerson = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request
}


const exportedObject = { getAll, create, deletePerson, update }
export default exportedObject