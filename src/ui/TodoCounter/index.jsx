/* eslint-disable react/prop-types */

import './TodoCounter.scss';

const TodoCounter = ({ totalTodos, completedTodos, loading }) =>{
  return (
    <h2
      className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}
    >
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  );
}

export default TodoCounter ;
