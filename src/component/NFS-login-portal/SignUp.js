import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {

  navigation = useNavigate()

  const [signUpDetail, setSignUpDetail] = useState({
    email:"",
    password:"",
    schoolName:""
  })

  const signUpHandle =async(e)=>{
    e.preventDefault()

   try{
    
     let signUp = await fetch('http://localhost:5000/signup',{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(signUpDetail)

    })
  
      signUp = await signUp.json()
      console.log('status =',signUp)
      if(signUp.status==="active"){
        alert("Please check your we have sent you the invitaion code to login")
        navigation('/login')

      }
      else{
        console.log('some error occured')
      }
  }
    catch(error){
      alert(error.message)
    }
  }
  
  return (
    <div>
         <div className='login-container'>
        <h3>Sign Up</h3>

        <form onSubmit={e=>signUpHandle(e)}>
            <input placeholder='enter your email' name='email' type='email' required  onChange={e=>{setSignUpDetail({...signUpDetail, [e.target.name]:e.target.value})}}></input>
            <input placeholder='enter your password' name='password' type='password' required  onChange={e=>{setSignUpDetail({...signUpDetail, [e.target.name]:e.target.value})}}></input>
            <input placeholder='enter School Name'  name='schoolName' type='text' required  onChange={e=>{setSignUpDetail({...signUpDetail, [e.target.name]:e.target.value})}}></input>
            <div className='forget-password'>
            <span>Have an Account <Link to="/login">LogIn</Link></span>
            </div>
           
        <button className='submit-btn' >Sign Up</button>
        </form>
    </div>
    </div>
  )
}

export default SignUp