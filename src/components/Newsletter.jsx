import React from 'react'

function Newsletter() {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 '>
                <h1 className='md:text-4xl sm:text-3xl text-2xl py-2 font-bold'>Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to your newsletter and stay up to day.</p>
            </div>

            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input type="email" placeholder='Enter email' className='p-3 w-full flex rounded-md text-black'/>
                    <button className='bg-[#00fd9a] w-[200px] rounded-md font-medium sm:ml-4 px-6 my-6 mx-auto py-3 text-black'>Notify Me</button>
                </div>

                <p>We care bout the protection of your data. Read our <span className='text-[#00fd9a] underline cursor-pointer'>Privacy Policy</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter