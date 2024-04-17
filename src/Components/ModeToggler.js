function ModeToggler(){
  let darkModeOn = true;
  const darkMode = <h1>dark mode is on</h1>;
  const lightMode = <h1>Light mode is on</h1>

  function clickHandler(){
    darkModeOn = !darkModeOn
    if (darkModeOn == true){
      console.log("dark mode is on")
    } else {
      console.log("light mode is on")
    }
  }


  return(
    <div>
      {darkModeOn ? darkMode : lightMode}
      <button onClick={clickHandler}> Click Me2</button>

    </div>
  )

}

export default ModeToggler