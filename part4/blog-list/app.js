/*
 * @Author: Frank Chu
 * @Date: 2023-02-07 19:13:09
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-02-07 20:48:09
 * @FilePath: /fullstackopen/part4/blog-list/app.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name}, All Rights Reserved. 
 */

const express = require('express') // 
const app = express() // app.use => express

const mongoose = require('mongoose') // mongoose
const config = require('./utils/config') // mongoose.connect
const logger = require('./utils/logger') // console.log
const middleware = require('./utils/middleware')
const cors = require('cors')

// (node:53765) [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. 
// Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
// (Use `node --trace-deprecation ...` to show where the warning was created)
// 这意味着，默认情况下，Mongoose 会过滤掉不在 schema 中的查询过滤属性。你也可以全局禁用strictQuery来覆盖默认配置:
// Mongoose 6.x 迁移指南 - 黄士心的文章 - 知乎
// https://zhuanlan.zhihu.com/p/467753930
mongoose.set('strictQuery', false)

mongoose.connect(config.MONGODB_URI)
    .then(() => {
        logger.info('connected to MongoDB')
    })
    .catch(error => {
        logger.info('error connecting to MongoDB', error.message)
    })

app.use(cors())
app.use(express.json())
const blogRouter = require('./controllers/blogs')
app.use('/api/blogs', blogRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)
module.exports = app