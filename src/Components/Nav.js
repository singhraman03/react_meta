function Nav(props){
  const mainNav = {
    display: "flex",
    textAlign: "justify",
    fontWeight: "600",
  
  }
  return (
    <div style={mainNav}>
      <nav className="Main-Nav">
      <ul>
        <li>Home, {props.name}</li>
        <li>Articles</li>
        <li>contact</li>
        <li>About</li>
      </ul>
    </nav>
    </div>
  
  )};
export default Nav;