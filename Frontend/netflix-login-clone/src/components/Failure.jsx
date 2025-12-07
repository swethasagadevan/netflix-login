import React from 'react'
import '../App.css'
import Header from './Header'
import { Link } from 'react-router-dom'

const Failure = () => {
  return (  
     <div className='mainsection'>
        <Header/>
        <div className='bg-black m-7 p-4 text-center'>
            <p className='font-bold text-red-600 text-2xl p-5'>Log in Failed , Invalid User</p>
            <Link to="/" className='text-white m-2 p-2 border border-red-400 rounded-md'>Back</Link>
        </div>

    </div>
  )
}

export default Failure;