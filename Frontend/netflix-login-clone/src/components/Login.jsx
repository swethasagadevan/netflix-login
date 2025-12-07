import React, { useState } from 'react'
import axios from "axios";
import "./Login.css";
import {useNavigate} from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();

    const [userName, setUserName]=useState("")
    const [password, setPassword]=useState("")
    const [isUserValid,setIsUserValid]=useState(false)
    const [isPwdValid,setPwdValid]=useState(false)

    function handleUserName(e){
        setIsUserValid(false)
        setUserName(e.target.value)
    }

    function handlePassword(e){
        setPwdValid(false)
        setPassword(e.target.value)
    }

    function handleClick(){
        if (!userName)
        {
            setIsUserValid(true)
        }
        if (!password)
        {
            setPwdValid(true)
        }
        if(userName && password){
            const loginDetails=axios.post("http://localhost:3000/login",{"userName":userName,"password":password})

        loginDetails.then((data)=>{
            if (data.data==true){
                navigate("/success")
                // console.log(data)
            }
            else{
                navigate("/failure")
                // console.log(data)
            }
        })

        }
        
    }

  return (
    <section className='mainsection flex items-center justify-center'>
        <div className='mainsection-box'>
            <div className='text-white flex flex-col m-5 gap-10'>
                <h1 className='text-3xl font-bold'>Sign In</h1>
                
                    <input type="text" name="userName" onChange={handleUserName} placeholder='Email or mobile number' className='p-4 rounded-md bg-black border border-gray-400 w-full'/>
                    {isUserValid && <p className='text-red-500 text-center'>Please enter Username</p>}
                    <input type='text' name="password" onChange={handlePassword} placeholder='Password' className='p-4 rounded-md bg-black border border-gray-400 w-full'/> 
                    {isPwdValid && <p className='text-red-500 text-center'>Please enter password</p>}
                    <button onClick={handleClick} className='bg-red-600 py-4 rounded-md w-full'>Sign In</button>
                <p className='text-gray-500 text-sm'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p> 
                <a href="#" className='text-blue-400 underline text-sm'>Learn more.</a>   
            </div>
        </div>
    </section>
  )
}

export default Login;

