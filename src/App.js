import React, { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
//To do Imports
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";


const App = () => {

  //Start Notes
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

    if (savedNotes) {
      setNotes(savedNotes)
    };
  }, [])

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes])

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  //End Notes

  //To do

  const initialState = localStorage.getItem("todos") || [];
  const [input, setInput] = useState("");
  const [editTodo, setEditTodo] = useState(null);
  const [todos, setTodos] = useState([]);


  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));

    if (savedTodos) {
      setTodos(savedTodos)
    };
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  //End To Do

  return(
    <div className={`${darkMode && 'dark-mode'}`} >
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText) )} handleAddNote={addNote} handleDeleteNote={deleteNote} />
        <TodoForm 
          input = {input}
          setInput = {setInput}
          todos = {todos}
          setTodos = {setTodos}
          editTodo = {editTodo}
          setEditTodo = {setEditTodo}
        />
        <TodoList 
          className="container" 
          todos={todos} 
          setTodos={setTodos} 
          setEditTodo={setEditTodo} 
        />
      </div>
      
       
      
      
    </div>
  );
};

export default App;