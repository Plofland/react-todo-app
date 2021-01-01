import React from 'react';

function TodoItem(props) {
  //   const { item, handleChange } = props;
  return (
    <div className="todoItem">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p className="todoText">{props.item.text}</p>
    </div>
  );
}

export default TodoItem;
