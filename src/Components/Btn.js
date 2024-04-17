function Btn(props){
  const clickHandler = () => console.log("clicked");
  return (
    <button onClick={clickHandler}>click me, {props.color}</button>
  )
};

export default Btn