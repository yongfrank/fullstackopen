/*
 * @Author: Frank Chu
 * @Date: 2023-01-31 12:16:20
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-01-31 13:50:06
 * @FilePath: /fullstackopen/part2/countries/src/services/openweatherApi.js
 * @Description: 
 * 
 * Copyright (c) 2023 by Frank Chu, All Rights Reserved. 
 */
import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather'

const getWeather = async (city) => {
    const request = axios.get(`${baseUrl}?q=${city}&appid=${api_key}`)
    return request
}

const exportedObject = { getWeather }
export default exportedObject