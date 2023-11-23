/* eslint-disable react/prop-types */
import React from 'react';
const TodoHeader = ({ children, loading }) => {
  return (
    <header>
      {
        React.Children
          .toArray(children)
          .map(child => React.cloneElement(child, { loading }))
      }
    </header>
  );
}

export default TodoHeader ;
