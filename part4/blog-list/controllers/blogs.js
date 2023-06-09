/*
 * @Author: Frank Chu
 * @Date: 2023-02-07 19:14:21
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-02-07 20:45:03
 * @FilePath: /fullstackopen/part4/blog-list/controllers/blogs.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name}, All Rights Reserved. 
 */

const personsRouter = require('express').Router()
const Blog = require('../models/blog')
// const logger = require('../utils/logger')

personsRouter.get('/', (request, response) => {
    Blog
        .find({})
        .then(blogs => response.json(blogs))
})

personsRouter.post('/', (request, response, next) => {
    const blog = new Blog(request.body)
    blog
        .save()
        .then(result => {
            response.status(201).json(result)
        })
        .catch(next)
})

module.exports = personsRouter