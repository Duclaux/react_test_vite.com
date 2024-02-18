import React from 'react'
import Laptop from '../assets/laptop.jpg'

function Analystics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="img laptop" />
            <div className='flex flex-col  justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYSTICS DASHBOARD</p>
                
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analystics Centrally</h1>
                
                <p className=''>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere veniam praesentium consequuntur? Velit nulla aliquid, quaerat eum voluptatem dolores expedita quas numquam fugit modi hic ipsa sit quo saepe! Illo.
                </p>

                <button className='text-[#00fd9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 md:mx-0 bg-black'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analystics