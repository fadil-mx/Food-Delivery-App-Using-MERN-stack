import React from 'react'
import './login.css'    
import { assets } from '../../assets/assets'

const login = ({setShowlogin}) => {

const [currentstate, setCurrentstate] = React.useState("login")

  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className="login-popup-title">
          <h2>{currentstate}</h2>
          <img src={assets.cross_icon} alt="cross" onClick={()=> setShowlogin(false)}/>
        </div>

        <div className="login-popup-inputs">
          {currentstate==="sign up"?<input type="text" placeholder="Your name" required />:null}
        <input type="email" placeholder="Your email" required />
        <input type="password" placeholder="Password" required />
        </div>

        <button>{currentstate==="sign up"?"Create account":"login"}</button>
        
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>By countinuing,i agree to the terms and condition. </p>
        </div>

        {currentstate==="login"?
        <p>create a new account?<span onClick={()=>setCurrentstate("sign up")}>Click here</span></p>:
        <p>already has a account <span onClick={()=>setCurrentstate("login")}>login here </span></p>}
      </form>
    </div>
  )
}

export default login
