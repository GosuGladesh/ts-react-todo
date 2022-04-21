import { useState } from "react"
import { Todo } from "../components/Todo"

interface todo {
    id: number,
    text: string
}

export function Homepage() {
    
    const [todos, setTodos] = useState<todo[]>([])
    const [inputText, setInputText] = useState("")
    const [todoId, setTodoId] = useState(0)

    function addTodo() {
        todos.push({ id: todoId, text: inputText })
        setTodoId(todoId + 1);
        setTodos(todos.slice());
    }

    function removeTodo(id: number) {
        const newTodos = todos.filter((todo) => { return todo.id !== id })
        setTodos(newTodos.slice())
    }
    return (
        <>
            <h1>My Todo List</h1>
            <div>
                <input type="text" onChange={(e) => setInputText(e.target.value)}></input>
                <button onClick={() => addTodo()}>Ajouter</button>
            </div>
            
            <div className="todoList">
                {todos.map(todo => {
                    return <Todo text={todo.text} id={todo.id} removeTodo={removeTodo}></Todo>
                  })}
            </div>
        </>
    )
}