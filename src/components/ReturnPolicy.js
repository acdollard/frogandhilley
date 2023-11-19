import React from "react";
import { Link } from "react-router-dom";

const ReturnPolicy = () => {
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
      <div className="return_policy page_content">
      <h1>Return Policy</h1>
      <div className="page_text">
        <p>Here at Frog and Hilley we want you to be so, so satisfied with your purchase.
            if you are not, you may return the items within 30 business days along with a handwritten letter
            that details the follwing:<br/>
            <br/> 1. Why you have such bad taste, and
            <br /> 2. How you got so silly. 
        </p>
        <p className="page_text">
          Upon review of your handwritten note, we will assess your sincerity, earnestness and writing skill
          to determine if a refund is appropriate. 
        </p>
        </div>
      </div>
    </div>
  )
}

export default ReturnPolicy;