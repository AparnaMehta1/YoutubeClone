import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../Utiles/AppSlice';


const WatchPage = () => {
    const [searchParams] = useSearchParams();
const dispatch = useDispatch();
useEffect(() =>{
    dispatch(closeMenu());
})
  return (
    <div>
        <iframe className='m-4 pl-8' width="1050" 
        height="500"
         src={"https://www.youtube.com/embed/" + searchParams.get("v") +  "?autoplay=1&mute=1"}
         title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
  )
}

export default WatchPage;

