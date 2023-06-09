import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaTwitter, FaFacebook, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

const Main = () => {
 

  return (
    
    <div id="main">
        <img className='w-full h-screen object-cover object-center' src="/foto cv.jpg" alt="Foto Luthfi" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50 '>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-800 '>Hi, I'm <span className='text-red-700'>Luthfi</span></h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a 
            <TypeAnimation
      sequence={[
        'Web Developer', // Types 'One'
        1000, // Waits 1s
        'Front-End Developer', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Tech Enthusiast',
        2000,
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', paddingLeft: '5px' }}
    />
            </h2>
            <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                <a href='https://twitter.com/Luthfimbaihaqi' target="_blank" > <FaTwitter size={20} className="cursor-pointer" /> </a> 
                <FaFacebook size={20} className="cursor-pointer" />
               <a href='https://www.instagram.com/luthfimbaihaqi/?hl=en' target="_blank" ><FaInstagram size={20} className="cursor-pointer" /> </a> 
               <a href='https://www.linkedin.com/in/luthfi-baihaqi-1a8a2a19a/' target="_blank" ><FaLinkedinIn size={20} className="cursor-pointer" /> </a>
            </div>
        </div>
        </div>
    </div>
    
  )
}

export default Main