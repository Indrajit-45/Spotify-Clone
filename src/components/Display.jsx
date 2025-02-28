import React, { useRef, useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider,} from 'react-router-dom'
import DisplayHome from './DisplayHome';
import DisplayAlbum from './DisplayAlbum';








const Display = () => {

  const displayRef = useRef();

  const funForColor = (bgColor)=> {
    displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`
  };
  
  // useEffect(()=>{
  //   displayRef.current.style.background = `#121212`
  // });


  const router = createBrowserRouter([
    {
        path:"/",
        element:<DisplayHome />,
    },
    {
      path:"/album/:id",
      element:<DisplayAlbum funForColor={funForColor}/>
    },
  ]);

return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
        <RouterProvider router={router}/>
    </div>
  )
}

export default Display