import { useState } from 'react';

export default function InputComponent(){
  const [inputText, setText] = useState('hello')

  function handleChange(e){
    setText(e.target.value);
  }

  return (
    <>
    <input value={inputText} onChange={handleChange}/>
    <p>you typed: {inputText}</p>
    <button onClick={() => setText('hello')}>reset</button>
    </>
  )
}