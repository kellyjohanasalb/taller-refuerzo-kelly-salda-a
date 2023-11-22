
import TodoCounter from './components/TodoCounter/TodoCounter';
import TodoSearch from './components/TodoSearch/TodoSearch';
import TodoList from './components/TodoList/TodoList';
import TodoItem from './components/TodoItem/TodoItem';
import CreateTodoButton from './components/CreateTodoButtom/CreateTodoButton'
import './styles/global.scss';

const defaultTodos = [
  {text: 'cortar cebolla', completed: true},
  {text: 'mercar', completed: false},
  {text: 'hacer ensalada', completed: true},
  {text: 'terminar el taller', completed: false},
];

const App = () => {
  return (
    <>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
       {defaultTodos.map(todo => (
        <TodoItem 
        key={todo.text} 
        text={todo.text} 
        completed={todo.completed}
      />
       ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}


export default App;
