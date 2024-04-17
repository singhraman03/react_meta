function Intro1(props){
  return (
    <div className="blog-post-intro">
      <h2>I am learning react</h2>
      <div>
        <p>I've completed react basic course, {props.type}</p>
        <p className="link">Read more...</p>
      </div>

    </div>
)};
export default Intro1;

// const myRandom = () => {
//   return  Math.floor(Math.random()*10) +1

// }

// // invoking function inside JSX 

// function getRandom(){
//   return(
//     <div className="getRandom">
//       <h1>{myRandom()}</h1>
//       <h1>{math.random() >= 0.5 ? "above 0.5": "below 0.5"}</h1> // using ternary in JSX
//     </div>

//   );
// }

