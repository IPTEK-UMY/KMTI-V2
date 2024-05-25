import React, { useState, useEffect, useRef } from 'react';
import kmti from '../src/Assets/images-kmti/icons/favicon.png'
import { Link } from 'react-router-dom';

import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";




function navbar() {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
      setIsOpen(prev => !prev);
  }
  return (
    <>
      <nav className="w-full text-white z-10 absolute">
        <div className="mx-auto md:px-20 px-10 flex justify-between items-center">
            <div class="text-white text-lg font-bold">
                <a href="#" className="px-10">
                  <img src={kmti} alt="" className='h-14'/>
                </a>
            </div>
                <ul className='hidden md:flex items-center px-7 gap-x-4 text-white font-bold flex'>
                  <a href='#' className='bg-transparent px-3 py-1 rounded-2xl border-solid border-2 border-[#67ccff] hover:bg-[#67ccff] hover:shadow-lg hover:shadow-[#67ccff] hover:text-slate-950'>home</a>
                  <a href='#about' className='bg-transparent px-3 py-1 rounded-2xl border-solid border-2 border-[#67ccff] hover:bg-[#67ccff] hover:shadow-lg hover:shadow-[#67ccff] hover:text-slate-950'>about</a>
                  <a href='#divisi' className='bg-transparent px-3 py-1 rounded-2xl border-solid border-2 border-[#67ccff] hover:bg-[#67ccff] hover:shadow-lg hover:shadow-[#67ccff] hover:text-slate-950'>division</a>
                  <a href='#event' className='bg-transparent px-3 py-1 rounded-2xl border-solid border-2 border-[#67ccff] hover:bg-[#67ccff] hover:shadow-lg hover:shadow-[#67ccff] hover:text-slate-950'>Event</a>
                  <a href='' className='bg-transparent px-3 py-1 rounded-2xl border-solid border-2 border-[#67ccff] hover:bg-[#67ccff] hover:shadow-lg hover:shadow-[#67ccff] hover:text-slate-950'>IT Research</a>
                  <a href='' className='bg-transparent px-3 py-1 rounded-2xl border-solid border-2 border-[#67ccff] hover:bg-[#67ccff] hover:shadow-lg hover:shadow-[#67ccff] hover:text-slate-950'>Study More</a>
                </ul>
                <button onClick={toggleMenu} className='md:hidden z-30'>
                    {isOpen ? (<IoClose className='text-4xl md:hidden mr-2' />) : (<IoMenu className='text-4xl md:hidden mr-2' />)}
                </button>
        </div>
                {isOpen && (
                <ul className='md:hidden absolute flex flex-col h-fit bg-black bg-opacity-75 px-8 pt-24 gap-y-2 z-0 top-0 left-0 w-full pb-6'>
                  <a href='#' className='bg-transparent px-3 py-1 rounded-2xl border-solid border-2 border-[#67ccff] hover:bg-[#67ccff] hover:shadow-lg hover:shadow-[#67ccff] hover:text-slate-950'>home</a>
                  <a href='#about' className='bg-transparent px-3 py-1 rounded-2xl border-solid border-2 border-[#67ccff] hover:bg-[#67ccff] hover:shadow-lg hover:shadow-[#67ccff] hover:text-slate-950'>about</a>
                  <a href='#divisi' className='bg-transparent px-3 py-1 rounded-2xl border-solid border-2 border-[#67ccff] hover:bg-[#67ccff] hover:shadow-lg hover:shadow-[#67ccff] hover:text-slate-950'>division</a>
                  <a href='#event' className='bg-transparent px-3 py-1 rounded-2xl border-solid border-2 border-[#67ccff] hover:bg-[#67ccff] hover:shadow-lg hover:shadow-[#67ccff] hover:text-slate-950'>Event</a>
                  <a href='' className='bg-transparent px-3 py-1 rounded-2xl border-solid border-2 border-[#67ccff] hover:bg-[#67ccff] hover:shadow-lg hover:shadow-[#67ccff] hover:text-slate-950'>IT Research</a>
                  <a href='' className='bg-transparent px-3 py-1 rounded-2xl border-solid border-2 border-[#67ccff] hover:bg-[#67ccff] hover:shadow-lg hover:shadow-[#67ccff] hover:text-slate-950'>Study More</a>
                </ul>)}
    </nav>
    </>
  )
}

export default navbar
