import "./LoginSingup.css"
import user_icon from "../../assets/person.png"
import email_icon from "../../assets/email.png"
import password_icon from "../../assets/password.png"
import { useState } from "react"

const LoginSingup = () => {

  const [action, setAction] = useState("Sign Up")


  return (
    <>
      <div className="container1">
        <div className="header1">
          <div className="text1">{action}</div>
          <div className="underline1"></div>
        </div>
        <div className="inputs1">
          {action === "Login" ? <div></div> : <div className="input1">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" />
          </div>}


          <div className="input1">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email" />
          </div>

          <div className="input1">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" />
          </div>
        </div>
        {action === "Sign Up" ? <div></div> : <div className="forgot-password1">forgot Password <span>Click Here</span></div>}

        <div className="submit-container1">
          <div className={action === "Login" ? "submit1 gray" : "submit1"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
          <div className={action === "Sign Up" ? "submit1 gray" : "submit1"} onClick={() => { setAction("Login") }}>Login</div>
        </div>
      </div>
    </>
  )
}

export default LoginSingup







