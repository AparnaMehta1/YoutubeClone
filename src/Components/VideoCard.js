import React from 'react';
const VideoCard = ({ info }) => {
    console.log(info);
    const {snippet, statistics} = info;
    const {title,thumbnails, channelTitle } = snippet;
  return (
    <div className='w-72 p-2 m-2 hover:w-80  hover:shadow-lg hover:bg-slate-50 hover:rounded-lg ' >
        <img className='rounded-3xl hover:w-96' alt="videos" src={thumbnails.medium.url} />
        <ul>
         <li className='font-semibold'>{title}</li>
        <li className='text-sm text-gray-500 hover:text-gray-700'>{channelTitle}</li>
        <li className='text-sm text-gray-700'>{statistics?.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard;