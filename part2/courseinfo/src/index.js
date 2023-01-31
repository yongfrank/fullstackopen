/*
 * @Author: Frank Chu
 * @Date: 2023-01-21 00:44:07
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-01-27 10:58:00
 * @FilePath: /fullstackopen/part2/courseinfo/src/index.js
 * @Description: 
 * 
 * Copyright (c) 2023 by Frank Chu, All Rights Reserved. 
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const courses = [
    {
        name: 'Half Stack application development',
        id: 1,
        parts: [
        {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
        },
        {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
        },
        {
            name: 'State of a component',
            exercises: 14,
            id: 3
        },
        {
            name: 'Redux',
            exercises: 11,
            id: 4
        }
        ]
    }, 
    {
        name: 'Node.js',
        id: 2,
        parts: [
        {
            name: 'Routing',
            exercises: 3,
            id: 1
        },
        {
            name: 'Middlewares',
            exercises: 7,
            id: 2
        }
        ]
    }
    ]
ReactDOM.createRoot(document.getElementById('root')).render(<App courses={courses}/>)

// let counter = 1
// const refresh = () => {
//     ReactDOM.createRoot(document.getElementById('root')).render(<App counter={counter} />)
// }

// setInterval(() => {
//     refresh()
//     counter += 1
// }, 1000);

/*
import SwiftUI

@main
struct ReactDOMApp: App {
    vay body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
*/