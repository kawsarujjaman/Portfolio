import React from 'react';
import avaterImage from '../../assets/7358602-removebg-preview.png';
import TextChanger from '../TextChanger';


const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>

      <div className='md:w-2/4 md:pt-10'>
      <h1 className='text-2xl md:text-4xl font-bold flex leading-normal tracking-tighter'>Hi, I'm &nbsp; < TextChanger/> </h1>
      <p className='text-sm md:text-2xl tracking-tight'>Let's work toget and make history...</p>
      <button className='mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>Hire Me</button>    
      </div>

      <div className="img">
        <img className='' src={avaterImage} alt="undraw-Designer-rafiki-1" border="0" />
      </div>
    </div>
  )
}

export default Home