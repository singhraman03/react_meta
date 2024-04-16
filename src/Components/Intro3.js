function Intro3(props){
  return(
    <div className="blog-post-Intro">
      <h2>why i love frontend development, {props.type}</h2>
      <div>
        <p>In this blog, I'll list 10 reasons why i love frontend development</p>
        <p className="Link">Read more...</p>
      </div>
    </div>
  )
};

export default Intro3;