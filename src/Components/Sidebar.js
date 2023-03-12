import React from 'react';
import {ImFire, ImFilm} from "react-icons/im";
import { FaHome , FaAngleDown } from 'react-icons/fa';
import {TbPlaylist,TbBrandYoutube} from "react-icons/tb";
import {BsCollectionPlay,BsLightbulb,BsMusicNoteList, BsPlayBtn, BsClock, BsClockHistory, BsYoutube} from "react-icons/bs";
import {FiPlayCircle} from "react-icons/fi";
import {CgMediaLive} from "react-icons/cg";
import {SiYoutubegaming,SiYoutubestudio, SiYoutubemusic} from "react-icons/si";
import {HiOutlineNewspaper} from "react-icons/hi";
import {GiTrophyCup, GiClothesline} from "react-icons/gi";
import {TfiYoutube} from "react-icons/tfi";
import {BiHelpCircle} from "react-icons/bi";
import {AiOutlineSetting, AiOutlineFlag} from "react-icons/ai";
import {RiFeedbackLine} from "react-icons/ri";
import { useSelector } from 'react-redux';
const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
//    this is known as early return;
    if(!isMenuOpen) return null;
    const sidebarList=[{
        text:"Home",
        icon: <FaHome />
    },
    {
        text:"Shorts",
        icon: <TbPlaylist />
    },
    {
        text:"Subscriptions",
        icon: < BsCollectionPlay />
    },
    {
        text:"Library",
        icon: < FiPlayCircle />
    },
    {
        text:"History",
        icon: < BsClockHistory/>
    },
    {
        text:"Your Videos",
        icon: < BsPlayBtn/>
    },
    {
        text:"Watch Later",
        icon: < BsClock />
    },
    {
        text:"Show More",
        icon: < FaAngleDown />
    },]
    const sidebarExplore = [{
        text:"Trending",
        icon: <ImFire />
    },
{
        text:"Music",
        icon: <BsMusicNoteList />
    },
    {
        text:"Films",
        icon: <ImFilm />
    },
    {
        text:"Live",
        icon: <CgMediaLive />
    },
    {
        text:"Gaming",
        icon: <SiYoutubegaming />
    },
    {
        text:"News",
        icon: <HiOutlineNewspaper />
    },
    {
        text:"Sport",
        icon: <GiTrophyCup />
    },
    {
        text:"Learning",
        icon: <BsLightbulb />
    },
    {
        text:"Fashion & Beauty",
        icon: <GiClothesline />
    },]
    const sidebarMore =[{
        text:"YouTube Premium",
        icon:< BsYoutube />
    },
    {
        text:"Creator Studio",
        icon:< SiYoutubestudio />
    },
    {
        text:"YouTube Music",
        icon:< SiYoutubemusic />
    },
    {
        text:"YouTube Kids",
        icon:< TfiYoutube />
    },
    {
        text:"YouTube TV",
        icon:< TbBrandYoutube />
    },]
    const sidebarItems = [{
        text:"Settings",
        icon: <AiOutlineSetting />
    },{
        text:"Report history",
        icon: <AiOutlineFlag />
    },
    {
        text:"Help",
        icon: <BiHelpCircle />
    },
    {
        text:"Send feedback",
        icon: <RiFeedbackLine />
    },
]
  return (
    <div className='w-48 font-normal flex justify-center hover:overflow-y-scroll'>
        <ul>
            {sidebarList.map((item)=>{
                return (<div>
                    <li className='flex text-sm mx-2 rounded-xl px-4 py-3 hover:bg-gray-100'><span className='text-lg mr-5 mt-1'>{item.icon}</span>{item.text}</li>
                </div>)
            })}
            <hr className='mx-2 border-1 border-gray-300' />
            <li className='text-left ml-2 text-lg font-semibold'>Explore</li>
            {sidebarExplore.map((explore) =>{
                return <li className='flex mx-2 text-sm rounded-xl px-4 py-3 hover:bg-gray-100'><span className='text-lg mt-1 mr-5'>{explore.icon}</span>{explore.text}</li>
            })}
            <hr className=' mx-2 border-1 border-gray-300' />
            <li className='text-left ml-2 text-lg font-semibold'>More From Youtube</li>
            {sidebarMore.map((more) =>{
                return <li className='flex mx-2 text-sm rounded-xl px-4 py-3 hover:bg-gray-100'><span className='text-xl text-red-600 mt-1 mr-5'>{more.icon}</span>{more.text}</li>
            })}
            <hr className='mx-2 border-1 border-gray-300' />
            {sidebarItems.map((item) =>{
                return <li className='flex mx-2 text-sm rounded-xl px-4 py-3 hover:bg-gray-100'><span className='text-lg mt-1 mr-5'>{item.icon}</span>{item.text}</li>
            })}
            <hr className='mx-2 border-1 border-gray-300' />
            <li className='m-3 text-sm font-semibold text-gray-600'>About Press Copyright Contact us Creator Advertise Developers</li>
            <li className='m-3 text-sm font-semibold text-gray-600'>Terms Privacy Policy & Safety How YouTube works Test new features</li>
             <li className='m-3 text-sm font-semibold text-gray-400'>2023 Google LLC</li>
        </ul>
       
            
        
    </div>
  )
}

export default Sidebar;