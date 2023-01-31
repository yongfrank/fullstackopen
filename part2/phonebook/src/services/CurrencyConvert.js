/*
 * @Author: Frank Chu
 * @Date: 2023-01-30 22:16:19
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-01-30 22:26:49
 * @FilePath: /fullstackopen/part2/phonebook/src/services/CurrencyConvert.js
 * @Description: 
 * 
 * Copyright (c) 2023 by Frank Chu, All Rights Reserved. 
 */

import axios from 'axios'

const baseUrl = 'https://open.er-api.com/v6/latest/'

const getAll = (currency) => {
    const request = axios.get(`${baseUrl}/${currency}`)
    return request
}

const exportObject = { getAll }
export default exportObject