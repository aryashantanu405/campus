import Image from 'next/image'
import clubpic from '../assets/saptak.png'
import instalogo from '../assets/instagram-1-svgrepo-com.svg'
import youtubelogo from '../assets/youtube-color-svgrepo-com.svg'
import linkedinlogo from '../assets/linkedin-svgrepo-com.svg'
import sidearrow from '../assets/icons8-arrow-forward-right-3d-fluency-32.png'
export default function Clubpage(){
  return (
    <>
<div className=" bg-blue-200 fixed left-1 top-20 opacity-80 z-50 w-2/12 h-4/6 rounded-lg">
<div className="flex flex-col p-2">
<div className=" flex flex-col text-left text-xl font-serif text-black">
<ul>
  <li>Members</li>
  <li>Merch</li>
  <li>Inductions</li>
</ul>
</div>
<div className="flex justify-between items-baseline">
  
    <Image src={instalogo} alt=""  width={30}/>
    <Image src={youtubelogo} alt="" width={30}/>
    <Image src={linkedinlogo} alt="" width={30}/>
  
</div>
</div>
</div>


    <div className="min-h-screen flex flex-col items-center mb-5"> 
  <div className="mt-8">
    <Image className='rounded-full border border-orange-400'
    src={clubpic} 
    alt="club logo"
    width={200}/>
  </div>
  <div className="text-xl w-96 m-2 p-4 font-semibold text-center font-serif">"A club dedicated to music and performing arts."</div>
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