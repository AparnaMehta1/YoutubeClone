import React from 'react'
import Button from './Button';

const ButtonList = () => {
  const buttonList =[
    "All","Mixed","Gaming", "Thoughts", "Playlists","Colleges","T-series","Podcasts", "Bhajan music","Recentely uploaded","Watched", "Cricket", "Cooking" , "Sports", "Crafting", "Coding", "News", "Live", "Songs", "New to you"]
  return (
    <div className='flex flex-wrap'>{
      buttonList.map((button) => {
        return (
        <div><Button button = {button} /></div>)
      })
    }
    </div>
  )
}

export default ButtonList; 