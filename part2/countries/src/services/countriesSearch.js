import axios from 'axios'

const baseUrl = 'https://restcountries.com/v3.1/name'

const getAll = (name) => {
    if (name === '') {
        return Promise.resolve([])
    }
    return axios.get(`${baseUrl}/${name}`)
}

const exportedObject = { getAll }

export default exportedObject