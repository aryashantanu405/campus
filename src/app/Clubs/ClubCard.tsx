import Image, {StaticImageData} from 'next/image'
import pic from '../assets/desco.png'

interface ClubCardProps{
    name:string;
    description:string;
    imageUrl:StaticImageData;
    width:number;
    height:number;
}

const ClubCard:React.FC<ClubCardProps> =({name,description,imageUrl,width,height})=>{
  return(
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <Image className="rounded-t-lg" src={imageUrl} alt="" layout="intrinsic"/>
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <a href="/Clubs" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Explore
        </a>
    </div>
</div>

  )
}
export default ClubCard;