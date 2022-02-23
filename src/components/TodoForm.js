import React, {useEffect} from 'react'
//imports To Do
import {v4 as uuidv4} from "uuid";

const TodoForm = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {
  
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => 
      todo.id === id ? {title, id, completed} : todo
    );
    setTodos(newTodo);
    setEditTodo("")
  };
  
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else{
      setInput("")
    }
  }, [setInput, editTodo]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, {id: uuidv4(), title: input, completed: false}]);
      setInput(""); 
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  return (
   <form onSubmit={onFormSubmit} className="centralizar" >
     <input 
        type="text" 
        placeholder="Adicione uma tarefa..." 
        className="task-input" 
        value={input} 
        required 
        onChange={onInputChange}
      />
     <button className='button-add centralizar' type='submit'>
      {editTodo ? "OK" : "+"} 
     </button>
   </form>
  )
}

export default TodoForm;
