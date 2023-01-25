/*
 * @Author: Frank Chu
 * @Date: 2023-01-21 00:44:07
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-01-23 16:10:34
 * @FilePath: /fullstackopen/part1/courseinfo/src/App.js
 * @Description: 
 * 
 * Copyright (c) 2023 by Frank Chu, All Rights Reserved. 
 */
import './App.css'
const App = (props) => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

const Header = (props) => {
    console.log(props)
    return (
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {
    return (
        <div>
            <ul>
            {props.parts.map((part) =>
                <li key="{part.name}">{part.name} {part.exercises}</li>
            )}
            </ul>
            {/* <Part part={props.part1} exercises={props.exercises1} />
            <Part part={props.part2} exercises={props.exercises2} />
            <Part part={props.part3} exercises={props.exercises3} /> */}
        </div>
    )
}

// const Part = (props) => {
//     return (
//         <p> {props.part} {props.exercises} </p>
//     )
// }

const Total = (props) => {
    const total = props.parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <p>Number of exercises {total}</p>
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