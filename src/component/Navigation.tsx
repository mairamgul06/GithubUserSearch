import React from 'react'
import {Link} from 'react-router-dom'
function Navigation() {
  return (
    <nav className='flex justify-between items-center h-[50px] px-5 shadow-md bg-pink-900 text-white'>
        <h1 className='font-bold'>Git App</h1>
        <div>
            <Link to={'/'} className='mr-5'>Home</Link>
            <Link to={'favourite'}>Favourite</Link>
        </div>
    </nav>
  )
}

export default Navigation