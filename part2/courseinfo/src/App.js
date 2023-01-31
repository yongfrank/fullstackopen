/*
 * @Author: Frank Chu
 * @Date: 2023-01-21 00:44:07
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-01-27 11:23:35
 * @FilePath: /fullstackopen/part2/courseinfo/src/App.js
 * @Description: 
 * 
 * Copyright (c) 2023 by Frank Chu, All Rights Reserved. 
 */
import './App.css'
import Header from './components/Header'
import { useState } from 'react'

const App = (props) => {
    const [courses, setCourses] = useState(props.courses)
    const [newCourse, setNewCourse] = useState({
        name: 'newCourse',
        id: '1',
        parts: [
            {
                name: 'part1',
                exercises: '3',
                id: '1'
            }
        ]
    })

    const addCourse = (event) => {
        event.preventDefault()
        console.log("button clicked", event.target)
        const course = {
            name: event.target.name.value,
            id: event.target.id.value,
            parts: [
                {
                    name: event.target.name.value,
                    exercises: event.target.exercises.value,
                    id: event.target.id.value
                }
            ]
        }
        setNewCourse(course)
    }

    const handleNoteChange = (event) => {
        console.log(event.target.value)
    }

    return (
        <>
            {courses.map((course) => {
                return (
                    <div>
                        <Header course={course.name} />
                        <Content parts={course.parts} />
                        <Total parts={course.parts} />
                    </div>
                )
            })}
            <form 
            onSubmit={addCourse}
            onChange={handleNoteChange}
            >
                <input type="text" name="name" />
                <input type="text" name="exercises" />
                <input type="text" name="id" />
                <button type="submit">Add</button>
            </form>
        </>
    )
}

const Content = (props) => {
    return (
        <div>
            {props.parts.map((part) =>
                <div key={part.id}>{part.name} {part.exercises}</div>
            )}
        </div>
    )
}

const Total = (props) => {
    const total = props.parts.reduce((sum, part) => { 
        console.log("What's happened here", sum, part.exercises)
        return sum + part.exercises
    }, 0)
    return (
        <h3>Number of exercises {total}</h3>
    )
}


export default App

/*
import SwiftUI

struct ContentView: View {
    let course = "Half Stack application development"
    let part1 = "Fundamentals of React"
    let exercises1 = 10
    let part2 = "Using props to pass data"
    let exercises2 = 7
    let part3 = "State of a component"
    let exercises3 = 14
    
    var body: some View {
        VStack(alignment: .leading) {
            Text(course)
                .font(.title)
            Text("\(part1) \(exercises1)")
            Text("\(part2) \(exercises2)")
            Text("\(part3) \(exercises3)")
            Text("Number of exercises \(exercises1 + exercises2 + exercises3)")
        }
    }
}
*/