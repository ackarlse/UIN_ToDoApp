import { useState } from 'react'
import Form from './components/Form'
import Navbar from './components/Navbar'
import Todos from './components/Todos'

const startTodos = [
  {
    id: 0,
    title: 'Oblig 6',
    content: 'Må gjøre ferdig oblig innen 28.02.2022',
  },
]

function App() {
  // Write JavaScript, use Hooks, add state and more
  const [todo, setTodo] = useState({ title: ' ', content: ' ' })
  const [todos, setTodos] = useState([...startTodos])
  const [id, setId] = useState(1)

  const addToDo = (event) => {
    const inputName = event.target.name
    const inputValue = event.target.value
    setTodo((prev) => ({ ...prev, [inputName]: inputValue }))
  }
  const handleClick = () => {
    setId((prev) => prev + 1)
    setTodos((prev) => [
      { id, title: todo.title, content: todo.content },
      ...prev,
    ])
  }
  const removeTodo = (todoid) => {
    setTodos(todos.filter((item) => item.id !== todoid))
  }

  return (
    <>
      <Navbar username="ackarlse" />
      <main>
        <Form todo={todo} addToDo={addToDo} handleClick={handleClick} />
        <Todos handleRemove={removeTodo} todos={todos} title="My Todos" />
      </main>
    </>
  )
}

export default App
