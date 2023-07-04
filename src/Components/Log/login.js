import React from "react";
import "./login.css";
import { Link } from 'react-router-dom';



const login=() =>{
    return(
        <div className="login-page">
        <div className="cover">
            <h1>login</h1> 
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="password"/>
            <div className="log-btn">Login</div>
            <p className="text">Or new user</p>
            <Link to='/SignUp' className="link"><button className="Signup-link" >SignUp</button></Link>
        </div> 
        </div> 

    )
   
}
export default login
