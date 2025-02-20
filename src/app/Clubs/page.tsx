"use client"
import { useState } from 'react'
import Image from 'next/image'
import clubpic from '../assets/saptak.png'
import instalogo from '../assets/instagram-1-svgrepo-com.svg'
import youtubelogo from '../assets/youtube-color-svgrepo-com.svg'
import linkedinlogo from '../assets/linkedin-svgrepo-com.svg'
import { ChevronRight, ChevronLeft } from "lucide-react";
export default function Clubpage(){
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
  <div
        className={` max-h-96 fixed top-20 left-1 h-full bg-orange-200 shadow-lg transition-all duration-700 rounded-md ${
          isOpen ? "w-2/12" : "w-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col items-center py-4 h-full">
          
          {isOpen && (
            <>
            <ul className="mt-10 space-y-4 text-gray-700 w-full text-center">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Home</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Clubs</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Events</li>
            </ul>
            <div className="flex justify-between gap-6 items-center mt-10">
              <Image src={instalogo} alt=""  width={50}></Image>
              <Image src={linkedinlogo} alt="" width={50}></Image>
              <Image src={youtubelogo} alt="" width={50}></Image>
            </div>
            </>
          )}
        </div>
      </div>

      <button
        className="fixed top-1/3 left-1 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-r-lg shadow-md h-10 w-8"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>


    <div className="min-h-screen flex flex-col items-center mb-5"> 
  <div className="mt-8">
    <Image className='rounded-full border border-orange-400'
    src={clubpic} 
    alt="club logo"
    width={200}/>
  </div>
  <div className="text-xl w-96 m-2 p-4 font-semibold text-center font-serif">A club dedicated to music and performing arts.</div>
  <div
  className="flex justify-center ">
    <div className="w-11/12 grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-4 p-2">
  <div>
  <Image className="rounded-lg hover:border hover:border-blue-300"
  src={clubpic}
  alt=""
  layout="intrinsic"/>
  </div>
  <div>
  <Image className="rounded-lg hover:border hover:border-blue-300" 
  src={clubpic}
  alt=""
  layout=""/>
  </div>
  <div>
  <Image className="rounded-lg hover:border hover:border-blue-300" 
  src={clubpic}
  alt=""
  layout="intrinsic"/>
  </div>
  <div>
  <Image className="rounded-lg hover:border hover:border-blue-300" 
  src={clubpic}
  alt=""
  layout="intrinsic"/>
  </div>
  <div>
  <Image className="rounded-lg hover:border hover:border-blue-300" 
  src={clubpic}
  alt=""
  layout="intrinsic"/>
  </div>
  <div>
  <Image className="rounded-lg hover:border hover:border-blue-300 " 
  src={clubpic}
  alt=""
  layout="intrinsic"/>
  </div>
  
  </div></div>
  
</div>
    </>


  )
}