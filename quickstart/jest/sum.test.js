/*
 * @Author: Frank Chu
 * @Date: 2023-03-03 15:41:36
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-03-03 15:42:41
 * @FilePath: /fullstackopen/quickstart/jest/sum.test.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name}, All Rights Reserved. 
 */
const sum = require("./sum").sum

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
})