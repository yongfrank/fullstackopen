/*
 * @Author: Frank Chu
 * @Date: 2023-01-21 00:44:07
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-01-23 16:04:16
 * @FilePath: /fullstackopen/part1/courseinfo/src/index.js
 * @Description: 
 * 
 * Copyright (c) 2023 by Frank Chu, All Rights Reserved. 
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

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