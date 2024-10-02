import "./login.css";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function Login(){
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[cookie,setCookie,removeCookie]=useCookies(["email","password"]);
    let navigate=useNavigate(); 
    function handleEmail(e){
        setEmail(e.target.value);

    }
    function handlePassword(e){
        setPassword(e.target.value);

    }
    function handleSignin(){
        if(email==="john@gmail.com")
            {
            if(password==="john_123"){
                setCookie("email",email);
                setCookie("password",password);
                navigate("/home");
            }else{
                alert("Invalid password");
            }
        }else{
            alert("Invalid Email");
        }

    }
return(
    <div className="bg-style">
    <div className="bg-shade">
        <nav className="login-nav">
            MovieMania
        </nav>
        <section className="login-section">
            
            <div className="form">
           <h2>Sign In</h2>
                <div className="my-3">
                    <input type="text" placeholder="Enter Email" onChange={handleEmail}/>
                </div>
                <div className="my-3">
                    <input type="password" placeholder="Password" onChange={handlePassword}/>
                </div>

                <button className="btnSignin" onClick={handleSignin}>Sign In</button>
                <div className="my-3 text-center">Forgot password?</div>
                <div className="my-3">
                    <input type="checkbox"/>&nbsp;
                    <label>Remember me</label>
                </div>
                <div className="my-3">
                    <span className="text-secondary">New to Netflix?</span>&nbsp;
                    <span className="fw-bold">Sign up now.</span>
                </div>
           </div>
          
        </section>
    </div>

</div>
)
}