import React, { useState ,useEffect} from 'react';
import './App.css';
import Header from "./component/Header"
import Form from "./component/Form"
import Todolist from "./component/Todolist"
const App = () => {
    const Intialstorage =  JSON.stringify(localStorage.getItem("todo")||[]);
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    const [editTodo,setEditTodo] = useState(null);

    useEffect(() => {
        localStorage.setItem("todo",JSON.stringify(todos))
    })
    return ( <div class = "container">
        <div class = "app-wrapper">
        <div >
        <Header/>
        <div >
        <Form input = { input }
        setInput = { setInput }
        todos = { todos }
        setTodos = { setTodos }
        editTodo = {editTodo}
        setEditTodo = {setEditTodo}
        />  
        <Todolist todos = { todos }
        setTodos = { setTodos }
        setEditTodo = {setEditTodo}
        /> </div> </div >
        </div > </div >
    )
}

export default App;