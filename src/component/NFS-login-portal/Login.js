import React, {useState} from 'react'
import './loginStyle.css'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  navigation = useNavigate()
  
  const [logInDetail, setLogInDetail] = useState({
    email:"",
    password:"",
    inviteCode:""
  })

  const loginHandle = async(e)=>{
    console.log("log in handle")
    e.preventDefault()
    try{
      let user = await fetch('http://localhost:5000/login',{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(logInDetail)

    })

    user = await user.json()
    console.log('status =',user)
    if(user.status==="active"){
      alert("You have been logged in")
      navigation('/registration')
    }
    else{
      console.log('some error occured')
    }
    }
    catch(error){

    }
  }

  return (
    <div>
    <div className='login-container'>
        <h3>LogIn</h3>

        <form onSubmit={e=>loginHandle(e)}>
            <input placeholder='enter your invite code' type='text' name='inviteCode' required onChange={e=>setLogInDetail({...logInDetail, [e.target.name]:e.target.value})} ></input>
            <input placeholder='enter your email' name='email' type='email' required onChange={e=>setLogInDetail({...logInDetail, [e.target.name]:e.target.value})}></input>
            <input placeholder='enter your password' name='password' type='password' required onChange={e=>setLogInDetail({...logInDetail, [e.target.name]:e.target.value})}></input>
            <div className='forget-password'>
            <span>Forgot Password?</span>
            <span>Don't Have an Account <Link to="/signup">Sign Up</Link></span>
            </div>
           
        <button className='submit-btn'>LogIn</button>
        </form>
    </div>
    </div> 
  )
}

export default Login