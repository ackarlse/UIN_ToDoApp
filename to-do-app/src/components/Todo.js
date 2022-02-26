import Button from './Button'
import Title from './Title'

export default function Todo({ title, content, handleRemove }) {
  return (
    <article>
      <Title title={title} />
      <p>{content}</p>
      <Button handleRemove={handleRemove} />
    </article>
  )
}
