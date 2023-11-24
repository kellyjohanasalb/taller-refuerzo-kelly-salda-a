
import {  BrowserRouter , Route, Routes } from 'react-router-dom';
import  EditTodoPage  from './edit/EditTodoPage';
import  HomePage  from './home/HomePage';
import  NewTodoPage  from './new/NewTodoPage';


const AppRoutes = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewTodoPage />} />
        <Route path="/edit/:id" element={<EditTodoPage />} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes
