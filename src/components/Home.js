import React from "react";
import { Link } from "react-router-dom";
import frog from "../frog.png"

const Home = () => {
  return (
    <div >
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/returnPolicy">
            Return Policy
          </Link>
        </li>
      </ul>
      <div className="page_content">
      <h1>Frog & Hilley: Clothiers</h1>
      <img src={frog} style={{height:"500px", width:"500px"}} alt="frog"></img>
      </div>
      <br />
    </div>
  )
}

export default Home;