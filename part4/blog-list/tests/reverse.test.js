/*
 * @Author: Frank Chu
 * @Date: 2023-02-12 23:17:19
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-03-03 15:45:21
 * @FilePath: /fullstackopen/part4/blog-list/tests/reverse.test.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name}, All Rights Reserved. 
 */
const reverse = require('../utils/for_testing').reverse

describe('reverse', () => {
    test('reverse of a', () => {
        const result = reverse('a')
        expect(result).toBe('a')
    })
    
    test('reverse of react', () => {
        const result = reverse('react')
        expect(result).toBe('tcaer')
    })
    
    test('reverse of releveler', () => {
        const result = reverse('releveler')
        expect(result).toBe('releveler')
      })
})
