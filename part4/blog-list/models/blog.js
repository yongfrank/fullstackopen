/*
 * @Author: Frank Chu
 * @Date: 2023-02-07 19:14:29
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-02-07 19:45:32
 * @FilePath: /fullstackopen/part4/blog-list/models/blog.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name}, All Rights Reserved. 
 */
const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({ title: { type: String, required: true }, author: String, url: String, likes: Number })

module.exports = mongoose.model('Blog', blogSchema)