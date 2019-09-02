import React from 'react';

const Item = (props) => {
  return (
    <div>
      <p>{props.Title}</p>
      <p>{props.Location}</p>
      <p>{props.TimeInterval}</p>
      <p>{props.Note}</p>
    </div>
  )
}

export default Item;