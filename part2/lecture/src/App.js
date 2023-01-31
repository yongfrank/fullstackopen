/*
 * @Author: Frank Chu
 * @Date: 2023-01-28 11:31:22
 * @LastEditors: Frank Chu
 * @LastEditTime: 2023-01-30 21:20:49
 * @FilePath: /fullstackopen/part2/lecture/src/App.js
 * @Description: 
 * 
 * Copyright (c) 2023 by Frank Chu, All Rights Reserved. 
 */
import './App.css';
import { useState, useEffect } from 'react';
import Note from './components/Note';
import NoteService from './services/note';
import Footer from './components/Footer';

function App(props) {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null)

  const hook = () => {
    NoteService.getAll()
      .then(initialNote => {
        setNotes(initialNote);
      });
  };

  useEffect(hook, []);

  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id);
    const changedNote = { ...note, important: !note.important };
    NoteService
      .update(id, changedNote)
      .then(response => {
        setNotes(notes.map(note => note.id !== id ? note : response.data));
      })
      .catch(error => {
        setErrorMessage(`Note '${note.content}' was already removed from server`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      id: notes.length + 1,
      content: newNote,
      important: Math.random() < 0.5,
    }
    NoteService
      .create(noteObject)
      .then(response => {
        console.log(response);
        setNotes(notes.concat(response.data));
        setNewNote('');
      })
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  }

  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }

    return (
      <>
        <div className='error'>
          { message }
        </div>
      </>
    )
  }

  return (
    <>
      <div>
        <h1>Notes</h1>
        <Notification message={errorMessage}></Notification>
        <div>
          <button onClick={() => setShowAll(!showAll)}>show { showAll ? 'important': 'all'}</button>
        </div>
        <div>
          <ul>
          {notes.map(note => <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)}></Note>)}
          </ul>
        </div>
        <div>
          <form onSubmit={addNote}>
            <input onChange={handleNoteChange}/>
            <button type="submit">save</button>
          </form>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
