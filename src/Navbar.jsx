import React from 'react'
import kmti from '../src/Assets/images-kmti/icons/favicon.png'
import { Link } from 'react-router-dom';
import { BiSolidToTop } from "react-icons/bi";



function navbar() {
  
  return (
    <>
      <nav className="w-full text-white z-10 absolute">
        <div className="mx-auto px-20 flex justify-between items-center">
            <div class="text-white text-lg font-bold">
                <a href="#" className="px-10">
                  <img src={kmti} alt="" className='h-14'/>
                </a>
            </div>
                <ul className='items-center px-7 gap-x-4 text-white font-bold flex'>
                  <a href='#' className='bg-transparent px-3 py-1 rounded-2xl border-solid border-2 border-[#67ccff] hover:bg-[#67ccff] hover:shadow-lg hover:shadow-[#67ccff] hover:text-slate-950'>home</a>
                  <a href='#about' className='bg-transparent px-3 py-1 rounded-2xl border-solid border-2 border-[#67ccff] hover:bg-[#67ccff] hover:shadow-lg hover:shadow-[#67ccff] hover:text-slate-950'>about</a>
                  <a href='#divisi' className='bg-transparent px-3 py-1 rounded-2xl border-solid border-2 border-[#67ccff] hover:bg-[#67ccff] hover:shadow-lg hover:shadow-[#67ccff] hover:text-slate-950'>division</a>
                  <a href='#event' className='bg-transparent px-3 py-1 rounded-2xl border-solid border-2 border-[#67ccff] hover:bg-[#67ccff] hover:shadow-lg hover:shadow-[#67ccff] hover:text-slate-950'>Event</a>
                  <a href='' className='bg-transparent px-3 py-1 rounded-2xl border-solid border-2 border-[#67ccff] hover:bg-[#67ccff] hover:shadow-lg hover:shadow-[#67ccff] hover:text-slate-950'>IT Research</a>
                  <a href='' className='bg-transparent px-3 py-1 rounded-2xl border-solid border-2 border-[#67ccff] hover:bg-[#67ccff] hover:shadow-lg hover:shadow-[#67ccff] hover:text-slate-950'>Study More</a>
                </ul>
        </div>
    </nav>
    <a href='#home' id="scrollToTopBtn" class="fixed bottom-8 right-8 bg-blue-500 text-white px-4 py-2 rounded-full hover:shadow-xl hover:bg-blue-700 hover:shadow-[#67ccff] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
    <BiSolidToTop />
    </a>
    </>
  )
}

export default navbar
