import './TodoSearch.scss'

const TodoSearch = () => {
  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      onChange={(event) => {
        console.log('Escribiste en el TodoSearch');
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
      }}
    />
  )
}

export default TodoSearch
