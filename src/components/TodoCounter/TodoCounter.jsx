import './TodoCounter.scss'

const TodoCounter = ({ total, completed }) => {
  return (
    <h1>
        Has completado {completed } de { total}
    </h1>
  )
}

export default TodoCounter
