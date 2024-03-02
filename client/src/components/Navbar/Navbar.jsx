import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      
        <div>             
           <Link to='/' className='login'><img src='' alt='Logo' /></Link>
        </div>
      <div className='div-2'>
            <div className='login'><Link to='/loginpage' className='login'>Login</Link></div>
      </div>

    </div>
  )
}

export default Navbar