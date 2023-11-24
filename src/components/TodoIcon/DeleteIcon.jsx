/* eslint-disable react/prop-types */

import  TodoIcon  from './index';

function DeleteIcon({ onDelete }) {
  return (
    <TodoIcon
      type="delete"
      onClick={onDelete}
    />
  );
}

export default DeleteIcon ;
