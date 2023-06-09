/*
 * @Author: Frank Chu
 * @Date: 2023-02-13 00:19:00
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-02-14 12:25:45
 * @FilePath: /fullstackopen/part4/blog-list/utils/test_helper.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name}, All Rights Reserved. 
 */

const lodash = require('lodash')

const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    return blogs.length === 0 ? 0 : blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
    if (blogs.length === 0) { return null }
    const favorite = blogs.reduce((previousMax, blog) => previousMax.likes > blog.likes ? previousMax : blog)
    return favorite
}

// https://www.lodashjs.com/docs/lodash.countBy
const mostBlogs = (blogs) => {
    const blogCount = lodash.countBy(blogs, 'author')
    const topAuthor = lodash.maxBy(lodash.keys(blogCount), author => blogCount[author])
    return {
        author: topAuthor,
        blogs: blogCount[topAuthor]
    }
}

const mostLikes = (blogs) => {
    const authorLikes = lodash.groupBy(blogs, 'author')
    const likeSum = lodash.mapValues(authorLikes, blog => lodash.sumBy(blog, 'likes'))
    const topAuthor = lodash.maxBy(lodash.keys(likeSum), author => likeSum[author])
    return {
        author: topAuthor,
        likes: likeSum[topAuthor]
    }
}

const blogs = [
    {
        title: "Canonical string reduction",
        author: "Frank Chu",
        likes: 12
      },
      {
        title: "passage 2",
        author: "Edsger W. Dijkstra",
        likes: 1299
      },
      {
        title: "passage 3",
        author: "Edsger W. Dijkstra",
        likes: 120
      }
]

const answer = {
    author: "Edsger W. Dijkstra",
    likes: 1419
}

const result = mostLikes(blogs)

module.exports = {
    dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes
}
