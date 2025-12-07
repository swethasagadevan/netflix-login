import React from 'react'
import Header from './Header';
import '../App.css'
import {Link} from 'react-router-dom'
import Footer from './Footer';

const Success = () => {
  return (
    <>
    <div className='mainsection'>
        <Header/>
        <div className='bg-black m-7 p-4 text-center'>
            <p className='font-bold  text-green-600 text-2xl p-5'>Logged in Successfully</p>
             <Link to="/" className='text-white m-2 p-2 border border-green-400 rounded-md'>Back</Link>
        </div>     
    </div>
    <Footer/>
    </>
  )
}

export default Success;