function Button(){
  function clickHandler(){
    let myRandom = Math.floor(Math.random()*3)+1
    console.log("myRandom")
    let userInput = prompt("type a number")
    alert(`computer number: ${myRandom}, your guess: ${userInput}`);
  }
  return(
    <div>
      <h1> Task3: Number guess Game</h1>
      <button onClick={clickHandler}> click to start</button>
    </div>
  )
}

export default Button