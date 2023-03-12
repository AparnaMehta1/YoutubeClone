import React,{useState} from 'react';
import {MdLiveTv} from "react-icons/md";
import {BsBell, BsSearch} from "react-icons/bs";
import {FaUserCircle} from "react-icons/fa";
import hamburger from "../Assets/hamburgerIcon.png";
import youtube from "../Assets/Youtube.png"; 
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../Utiles/AppSlice';


const Header = () => {
   const [searchQuery, setSearchQuery] = useState("");
console.log(searchQuery);

   const dispatch = useDispatch();
   const toggleMenuHandler = () => {
      dispatch(toggleMenu())

   }
  return (
    <div className='grid grid-flow-col p-2 m-2'>
         <div className='flex col-span-1 '>
            <img onClick={() => toggleMenuHandler()} className='h-8' alt="hamburderIcon" src={hamburger} />
            <a href='/'><img className='cursor-pointer h-7 mx-2' alt="youtube" src={youtube} /></a>
         </div>
         <div className='flex col-span-10 justify-center'>
            <input
             value={searchQuery} 
             onChange={(e) =>{setSearchQuery(e.target.value)}}
             type="text"
              placeholder='Search...' className='hover:border-indigo-500 shadow-inner px-4 py-2 border-gray-200 border-2 rounded-l-full w-7/12'/>
            <button className='py-2 px-5 bg-gray-100 hover:bg-gray-200  border-gray-200 border-2 rounded-r-full'> <BsSearch className='h-6' /></button>
         </div>
         <div className='flex col-span-1 mx-2 justify-end'>
            <MdLiveTv className='h-7 mx-2 w-10' />
            <BsBell className='h-7 mx-2 w-10'  />
            <FaUserCircle className='h-7 mx-2 w-10' />
         </div>
    </div>
  )
}

export default Header;