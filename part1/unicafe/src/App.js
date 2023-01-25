/*
 * @Author: Frank Chu
 * @Date: 2023-01-24 23:55:28
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-01-25 21:26:03
 * @FilePath: /fullstackopen/part1/unicafe/src/App.js
 * @Description: 
 * 
 * Copyright (c) 2023 by Frank Chu, All Rights Reserved. 
 */
import './App.css';
import { useState } from 'react';

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td> 
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.good + props.neutral + props.bad === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <div>No feedback given</div>
      </div>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          
          <StatisticLine text="all" value={props.good + props.neutral + props.bad} />
          <StatisticLine text="average" value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
          <StatisticLine text="positive" value={props.good / (props.good + props.neutral + props.bad) * 100 + "%"} />
        </tbody>
      </table>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <>
      <div>
        <h1>Give Feedback</h1>
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
}

export default App;
