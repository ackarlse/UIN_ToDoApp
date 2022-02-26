export default function Button({ handleRemove }) {
    return (
      <button className="todo-btn" type="button" onClick={handleRemove}>
        Complete
      </button>
    )
  }
  