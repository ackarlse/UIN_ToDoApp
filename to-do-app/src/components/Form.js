export default function Form({ todo, addToDo, handleClick }) {
    const submitForm = (event) => {
      event.preventDefault()
    }
    return (
      <form onSubmit={submitForm}>
        <label htmlFor="to-do">To do</label>
        <input
          name="title"
          id="to-do"
          type="text"
          value={todo.addToDo}
          onChange={addToDo}
        />
        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          id="content"
          type="text"
          value={todo.addToDo}
          onChange={addToDo}
        />
        <button className="todo-btn" type="submit" onClick={handleClick}>
          Add
        </button>
      </form>
    )
  }
  