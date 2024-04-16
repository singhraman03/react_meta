function Nav(props){
  return (
    <nav className="Main-Nav">
      <ul>
        
        <li>Home, {props.name}</li>
        <li>Articles</li>
        <li>contact</li>
        <li>About</li>
      </ul>
    </nav>
  )};
export default Nav;