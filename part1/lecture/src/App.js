/*
 * @Author: Frank Chu
 * @Date: 2023-01-23 16:16:08
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-01-24 21:47:58
 * @FilePath: /fullstackopen/part1/lecture/src/App.js
 * @Description: 
 * 
 * Copyright (c) 2023 by Frank Chu, All Rights Reserved. 
 */
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

const DisplayButton = ({counter}) => <div>{counter}</div>
const ButtonsView = ({Action, text}) => <button onClick={Action}>{text}</button>

const App = () => {
  const [ counter, setCounter ] = useState(0)
  const [ allClicks, setAll ] = useState(["Recording now: "])
  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )
  const handleIncrement = () => { 
    setCounter(counter + 1)
    setAll(allClicks.concat("L"))
  }
  const setToZero = () => { 
    setCounter(0) 
    setAll(["Recording now: "])
  }
  const handleMinus = () => { 
    setCounter(counter - 1) 
    setAll(allClicks.concat("R"))
  }

  
  
  useEffect(() => {
    console.log("counter changed, counter is ", counter)
  }, [counter])

  // const
  

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>{allClicks.join(" ")}</p>
          <DisplayButton counter={counter} />
          <ButtonsView Action={handleMinus} text="-" />
          <ButtonsView Action={setToZero} text="zero" />
          <ButtonsView Action={handleIncrement} text="+" />
        </div>
        

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
