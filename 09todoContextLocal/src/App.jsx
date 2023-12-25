import TodoForm from './Components/TodoForm'
import './App.css'
import TodoItem from './Components/TodoItem'
import { TodoProvider } from './contexts'
import { useState,useEffect } from 'react'

function App() {
  
  const [todos, setTodos] = useState([])  // So basically this todo is an array

  const addTodo = (todo)=> {
    // setTodo(todo) This will remove all pre-existing values
    setTodos((prev)=>[{id: Date.now(), ...todo}, ...prev]) //... will spread the values and todo contains a list of key value pairs so we have to pass all the values  
  }

  const updateTodo = (id, todo) => {
    setTodos((prev)=> prev.map((prevTodo)=>(prevTodo.id === id ? todo : prevTodo))) //we have to find which todo matches the id so that we can add a new todo
    //map --> loop go to every element and find its id and check whether the id matches with the given id ....If yes? then do something 

    // prev.map((eachVal)=>{
    //   if(eachVal.id === id){
    //     return todo
    //   }
    // })
  }

  const deleteTodo = (id) => {
    setTodos((prev)=> prev.filter((todo)=>todo.id !==id))
  }

  const toggleComplete = (id) => {
    setTodos((prev)=> prev.map((prevTodo)=>prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  //Local storage always gives the value in string format

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                <TodoForm /> 
            </div>
            <div className="flex flex-wrap gap-y-3">
                
                {todos.map((todo)=>(
                  <div className='w-full' key={todo.id}>
                    <TodoItem todo={todo} />
                  </div>
                ) )}
            </div>
        </div>
      </div>
    </TodoProvider>  

    
  )
}

export default App
