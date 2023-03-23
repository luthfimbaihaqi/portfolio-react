import React, {useState} from 'react'
import  { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from "react-icons/ai"
import {BsPerson} from "react-icons/bs"
import {GrProjects} from "react-icons/gr" 
import { Link } from 'react-router-dom'

const Sidenav = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    };

    function download() {
        if (confirm ('Download file?')) {
            location.href = '/src/assets/Luthfi Muhammad Baihaqi - CV .pdf';
        }
    
        return false;
    }

  return (
    <div>
        <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden'/>
        {
            nav ? (
                <div className='fixed w-full h-screen bg-white/70 flex flex-col justify-center items-center z-20'>
                    <div class="rounded-full w-48 h-48 overflow-hidden bg-primary ">
                <img src="/foto-luthfi2.jpg" alt="profile" class="w-full h-full object-cover opacity-90" />
            </div>
                    <Link onClick={handleNav}  to="/" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineHome size={20} />
                        <span className='pl-4'>Home</span>
                    </Link>
                    <a onClick={handleNav} href="#work" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <GrProjects size={20} />
                        <span className='pl-4'>Work</span>
                    </a>
                    <a onClick={handleNav} href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineProject size={20} />
                        <span className='pl-4'>Projects</span>
                    </a>
                    <a onClick={handleNav} href="/src/assets/Luthfi Muhammad Baihaqi - CV .pdf" target="_blank" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <BsPerson size={20} />
                        <span className='pl-4'>Curriculum Vitae</span>
                    </a>
                    <Link onClick={handleNav} to="/contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                        <AiOutlineMail size={20} />
                        <span className='pl-4'>Contact</span>
                    </Link>
                </div>
            )
            : (
                ""
            )}

                <div className='md:block hidden fixed top-[25%] z-10'>
                    <div className='flex flex-col'>
                        <Link to="/" data-text="Home" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineHome size={20}/>
                        </Link>
                        <a href="#work" data-text="My Work Experience" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <GrProjects size={20}/>
                        </a>
                        <a href="#projects" data-text="My Projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineProject size={20}/>
                        </a>
                        <a href="/src/assets/Luthfi Muhammad Baihaqi - CV .pdf" target="_blank" data-text="Resume" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsPerson size={20}/>
                        </a>
                        <Link to="/contact" data-text="Contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail size={20}/>
                        </Link>
                    </div>
                </div>
        
    </div>
  );
};

export default Sidenav