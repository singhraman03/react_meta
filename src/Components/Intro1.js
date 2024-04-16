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