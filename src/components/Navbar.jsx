import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [ nav, setNav ] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }


  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
        <h2 className='w-full text-3xl font-bold text-[#00df9a] z-10'>REACT + VITE</h2>

        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
            { nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div className={ nav ? 'fixed top-0 left-0 w-[60%] border-r border-r-gray-900 bg-[#000300] h-full z-0 ease-in-out duration-300' : 'fixed top-0 left-[-100%] w-[60%] border-r border-r-gray-900 bg-[#000300] h-full z-0 ease-in-out duration-300'}>
            <ul className='pt-24 pl-4 uppercase'>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>Company</li>
                <li className='p-4 border-b border-gray-600'>Resources</li>
                <li className='p-4 border-b border-gray-600'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar