const listHelper = require('../utils/test_helper')

test('dummy returns one', () => {
    const blogs = []
    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
})

describe('total likes', () => {
    const listWithOneBlog = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        }
    ]

    test('when list has only one blog, equals the likes of that', () => {
        const result = listHelper.totalLikes(listWithOneBlog)
        expect(result).toBe(5)
    })
})

describe('favorite blog', () => {
    const blogs = [
        {
            title: "Canonical string reduction",
            author: "Edsger W. Dijkstra",
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
    const fav = {
        title: "passage 2",
        author: "Edsger W. Dijkstra",
        likes: 1299
      }
    test('return the favorite blog', () => {
        const result = listHelper.favoriteBlog(blogs)
        expect(result).toEqual(fav)
    })
})

// https://www.lodashjs.com/docs/lodash.countBy
describe('author who has the largest amount of blogs', () => {
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
        blogs: 2
    }

    test('normal blog list', () => {
        const result = listHelper.mostBlogs(blogs)
        expect(result).toEqual(answer)
    })
})

describe('author, whose blog posts have the largest amount of likes', () => {
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

    const result = listHelper.mostLikes(blogs)
    expect(result).toEqual(answer)
})