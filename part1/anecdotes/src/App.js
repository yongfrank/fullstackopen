/*
 * @Author: Frank Chu
 * @Date: 2023-01-25 22:30:31
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-01-25 22:43:24
 * @FilePath: /fullstackopen/part1/anecdotes/src/App.js
 * @Description: 
 * 
 * Copyright (c) 2023 by Frank Chu, All Rights Reserved. 
 */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleNextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        has {votes[selected]} votes
      </div>
      <div>
        <button onClick={handleVote}>vote</button>
        <button onClick={handleNextAnecdote}>next anecdote</button>
      </div>
      <h1>Anecdote with most votes</h1>
      <div>
        {anecdotes[votes.indexOf(Math.max(...votes))]}
      </div>
      <div>
        has {Math.max(...votes)} votes
      </div>
    </>
  )
}

export default App;
