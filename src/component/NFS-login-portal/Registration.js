import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Registration = () => {

    const [registraionDetail, setRegistraionDetail] = useState({
        Email:"",
        SchoolName:"",
        PrincipalName:"",
        City:"",
      })

    const RegistrationHandle = async(e)=>{
        e.preventDefault()
        console.log("registration =",registraionDetail)

        try{let registerData = await fetch('http://localhost:5000/register',{
          method:'POST',
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(registraionDetail)
        })

        registerData  = await registerData.json();

        if(registerData.status==="active"){
          alert('you have been registered')
          localStorage.setItem("AdminData",JSON.stringify(registerData.AdminData))
        }
        else{
          console.log('error =')
          alert('sorry some error occured')
        }}
        catch(error){
          console.log('error =',error.message)
         alert('sorry some error occured')
        }
    }

  return (
    <div>
    <div className='login-container'>
        <h3>Registration</h3>

        <form onSubmit={e=>RegistrationHandle(e)}>
            <input placeholder='Enter your School Name' type='text' name='SchoolName' required onChange={e=>setRegistraionDetail({...registraionDetail, [e.target.name]:e.target.value})} ></input>
            <input placeholder='Enter Principal Name' type='text' name='PrincipalName' required onChange={e=>setRegistraionDetail({...registraionDetail, [e.target.name]:e.target.value})} ></input>
            <input placeholder='Enter your email' name='Email' type='email' required onChange={e=>setRegistraionDetail({...registraionDetail, [e.target.name]:e.target.value})}></input>
            <input placeholder='Enter your city' name='City' type='text' required onChange={e=>setRegistraionDetail({...registraionDetail, [e.target.name]:e.target.value})}></input>
           
           
        <button className='submit-btn'>Register</button>
        </form>
    </div>
    </div> 
  )
}

export default Registration