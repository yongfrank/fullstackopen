/*
 * @Author: Frank Chu
 * @Date: 2023-02-02 11:16:30
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-02-04 10:42:34
 * @FilePath: /fullstackopen/part3/backend/index.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name}, All Rights Reserved. 
 */
/*
This is practically what we have already been doing in our browser-side code, but with a slightly different syntax:
import http from 'http'

These days, code that runs in the browser uses ES6 modules. Modules are defined with an export and taken into use with an import.

However, Node.js uses so-called CommonJS modules. 
The reason for this is that the Node ecosystem had a need for modules long before JavaScript supported them in the language specification. 
Node supports now also the use of ES6 modules, but since the support is yet not quite perfect we'll stick to CommonJS modules.

CommonJS modules function almost exactly like ES6 modules, at least as far as our needs in this course are concerned.
*/

// const { response } = require('express')
const express = require('express')
const cors = require('cors')
const app = express()

let notes = [
    {
        id: 1,
        content: "HTML is easy",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only Javascript",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        important: true
    },
    {
        id: 4,
        content: "Node.js is a server-side JavaScript runtime environment",
        important: false
    }
]

app.use('/favicon.ico', express.static('./favicon.ico'))
app.use(express.json())
app.use(cors())

const generateId = (notes) => {
    const maxId = notes.length > 0
        ? Math.max(...notes.map(n => n.id))
        : 0
    return maxId + 1
}

app.post('/api/notes', (request, response) => {
    const body = request.body

    if(!body.content) {
        return response.status(400).json({
            error: 'content missing'
        })
    }

    const note = {
        content: body.content,
        important: body.important || false,
        date: new Date(),
        id: generateId(notes)
    }

    notes = notes.concat(note)

    response.json(note)
})

app.get('/', (request, response) => {
    response.send('<h1>Hello World! Hot update~</h1>')
})

app.get('/api/notes', (request, response) => {
    response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)
    if (note) {
        response.json(note)
        console.log(`id is ${id}, note is ${note}`)
    } else {
        response.status(404).end('404 Not Found')
        console.log(`404`)
    }
})

app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter((note) => note.id !== id)
    console.log(notes)
    console.log(`deleting ${id}`)
    response.status(204).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

// const app = http.createServer((request, response) => {
//     response.writeHead(200, {'Content-Type': 'application/json'})
//     response.end(JSON.stringify(notes))
// })