// Write your code here
import './index.css'

const TodoItem = props => {
  const {todo, deleteTodo} = props
  const {id, title} = todo
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo-container">
      <p className="desc">{title}</p>
      <div>
        <button className="delete-btn" type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
