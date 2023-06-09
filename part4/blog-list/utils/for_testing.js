/*
 * @Author: Frank Chu
 * @Date: 2023-02-12 22:27:34
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-02-13 00:17:14
 * @FilePath: /fullstackopen/part4/blog-list/utils/for_testing.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name}, All Rights Reserved. 
 */
const reverse = (string) => {
    return string.split('').reverse().join('')
}

const average = (array) => {
    return array.length === 0 
        ? 0 
        : array.reduce((sum, item) => sum + item, 0) / array.length
}

module.exports = {
    average, reverse
}