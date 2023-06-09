/*
 * @Author: Frank Chu
 * @Date: 2023-02-07 19:13:04
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-02-07 19:22:41
 * @FilePath: /fullstackopen/part4/blog-list/index.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name}, All Rights Reserved. 
 */

const app = require('./app')
const config = require('./utils/config')
const logger = require('./utils/logger')

app.listen(config.PORT, () => {
    logger.info(`Server running on port ${config.PORT}`)
})