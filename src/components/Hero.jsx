import React from 'react'
import { ReactTyped } from "react-typed"

function Hero() {
  return (
    <div>
        <div className='max-w-[800px] mx-auto mt-[-96px] w-full h-screen text-center flex flex-col justify-center'>
            <p className='uppercase text-[#00df9a] font-bold p-2'>growing with data analystics</p>
            <h1 className='uppercase md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-white'>grow with data.</h1>

            <div className='flex justify-center items-center'>
                <p className='text-white md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexible financing for </p>
                <ReactTyped 
                    strings={[
                        "BTB",
                        "BTC",
                        "SASS",
                    ]} 
                    typeSpeed={120} 
                    backSpeed={140} 
                    loop
                    className='text-gray-500 md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                />
            </div>

            <p className='md:text-2xl text-xl font-bold text-gray-500'>
                Monitor your data analyystics to increasse revenue for BTB, BTC and SASS platforms.
            </p>

            <button className='bg-[#00fd9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero