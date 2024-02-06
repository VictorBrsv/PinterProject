import React from "react";
import { Link } from "react-router-dom";

function Main(): JSX.Element {
  return (
    <div className="App">
      <h4>Main Page</h4>
      <Link className='button' to='/'>Home</Link>
    </div>
  )
}

export default Main;
