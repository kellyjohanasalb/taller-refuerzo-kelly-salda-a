/* eslint-disable react/prop-types */

import  CheckSVG  from './check.svg';
import   DeleteSVG  from './delete.svg';
import './TodoIcon.scss';

const iconTypes = {
  "check": color => (
    <CheckSVG className="Icon-svg Icon-svg--check" fill={color} />
  ),
  "delete": color => (
    <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color} />
  ),
};

const TodoIcon = ({ type, color = 'gray', onClick }) => {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export default TodoIcon ;
