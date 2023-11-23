/* eslint-disable react/prop-types */

import './CreateTodoButton.scss';

const CreateTodoButton = (props) => {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      +
    </button>
  );
}

export default CreateTodoButton ;
