import { useState } from "react";
function Login(){
    const[email,setmail]=useState("");
    const[password,setpassword]=useState("");
    const [error,seterror]=useState("");
    const handlelogin=(e)=>{
        if(!email||!password){
            seterror("write");
            return;
        }
        if(!/\S+@\S+\.\S+/.test(email)){
            seterror("invalid email format");
            return;
        }
        if(password.length<6){
            seterror("password atleast of 6 charachters");
            return;
        }
        alert("login successful");
        seterror("");
    };
    return(
        <div style={{maxWidth:"300px",margin:"auto",textAlign:"center"}}>
            <h2>Login</h2>
            {error && <p style={{color:"red"}}>{error}</p>}
            <form onSubmit={handlelogin}>
                <input type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e)=>setmail(e.target.value)} />
                <br />
                <input type="password"
                placeholder="enter password"
                value={password}
                onChange={(e)=>setpassword(e.target.value)} />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
export default Login;