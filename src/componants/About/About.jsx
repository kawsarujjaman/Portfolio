import React from 'react'

import AboutImg from '../../assets/7358653-removebg-preview.png'
import { IoArrowForward } from 'react-icons/io5'


function About() {
  return (
    <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center shadow-xl mx-0 md:mx-20 bg-black bg-opacity-30 rounded-lg p-12'>
       <div>
        <h2 className='text-2xl md:text-4xl font-bold'> About me</h2>
        <div className="md:flex flex-col md:flex-row items-center">
            <img className='md:h-80' src={AboutImg} alt="About Image" />

            <ul>
                <div className='flex gap-3 py-4'> 
                    <IoArrowForward className=' mt-1' />
                    <span className='w-96'> 
                        <h1 className='text-xl md:text-2xl font-semibold leading-normal'> Frontend Developer </h1>
                        <p className='text-sm md:text-md leading-normal'> I am a passionate frontend developer with experience in building responsive and user-friendly web applications. I enjoy turning complex problems into simple, beautiful, and intuitive designs. </p>
                    </span>
                </div>

                 <div className='flex gap-3 py-4'> 
                    <IoArrowForward className=' mt-1' />
                    <span className='w-96'> 
                        <h1 className='text-xl md:text-2xl font-semibold leading-normal'> Backend Developer </h1>
                        <p className='text-sm md:text-md leading-normal'> I am a passionate frontend developer with experience in building responsive and user-friendly web applications. I enjoy turning complex problems into simple, beautiful, and intuitive designs. </p>
                    </span>
                </div>


                 <div className='flex gap-3 py-4'> 
                    <IoArrowForward className=' mt-1' />
                    <span className='w-96'> 
                        <h1 className='text-xl md:text-2xl font-semibold leading-normal'> Database Developer </h1>
                        <p className='text-sm md:text-md leading-normal'> I am a passionate frontend developer with experience in building responsive and user-friendly web applications. I enjoy turning complex problems into simple, beautiful, and intuitive designs. </p>
                    </span>
                </div>
            </ul>
        </div>
       </div>
    </div>
  )
}

export default About