import React from "react";
import { useState } from "react";

function Fruits(props){
  const[Fruits] = React.useState([
    {fruitName: 'apple', id: 1},
    {fruitName: 'guava', id: 2},
    {fruitName: 'plum', id: 3}
  ]);

  return(
    <div>
      {Fruits.map(f => <p key={f.id}>{f.fruitName}</p>)}
    </div>

  )
};

export default Fruits