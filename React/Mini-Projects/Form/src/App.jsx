import { useState } from 'react';
import './App.css'

function App() {

   const [userName,setUserName]=useState("");  
   const [password,setPassword]=useState("");


   const handleSubmit=(ele)=>{
      ele.preventDefault(ele);
      const Regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const validEmail=Regex.test(userName);
      if(!validEmail){
        alert("Invalid Email ");
      }
      else if(userName && password){
        alert("Login succesfull");
      }else{
        alert("Enter the details");
      }
   }

  const handleUsername=(e)=>{
 setUserName(e);
  }

  const handlePassword=(e)=>{
    setPassword(e);
  }

  return (
    <>
      <div className="formbox">
        <form >
          <div className="username">
            <label htmlFor="username">Username </label>
            <input type="text"  value={userName}
            name='username' onChange={(e)=>handleUsername(e.target.value)} />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input type="Password" value={password}
             name='password' onChange={(e)=>handlePassword(e.target.value)}/>
          </div>
          <div className="submit">
            <button onClick={handleSubmit}>Login</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
