import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-zinc-800 text-gray-400 py-4 px-10'>
        <p className='my-6'>Questions? Call 000-800-919-1743 (Toll-Free)</p>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-3 underline'>
            <a href="#"> FAQ</a>
            <a href="#"> Help Center</a>
            <a href="#"> Terms of Use</a>
            <a href="#"> Privacy</a>
            <a href="#"> Cookies Preferences</a>
            <a href="#"> Corporate Information</a>
        </div>
        <select name="language" id="language" className='my-6 bg-black text-white border-2'>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
        </select>
    </footer>
  )
}

export default Footer;