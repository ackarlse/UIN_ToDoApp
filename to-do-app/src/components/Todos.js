import Todo from './Todo'

export default function Todos({ todos, handleRemove, title }) {
  return (
    <section>
      <h2>{title}</h2>
      {todos.map((item) => (
        <Todo
          key={item.id}
          title={item.title}
          content={item.content}
          handleRemove={() => handleRemove(item.id)}
        />
      ))}
    </section>
  )
}
