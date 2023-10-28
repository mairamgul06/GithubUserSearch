import React from 'react'
import { useAppSelector } from '../hooks/redux'

function Favourite() {
  const { favourites } = useAppSelector(state => state.github);
  if (favourites.length === 0) return <p className='border bg-white py-2 px-4 mt-[10px] text-red-600 font-bold shadow-md text-center'>No one saving...</p>
  return (
    <ul className='line-none flex flex-col p-[10px] mx-auto w-full'>
      { favourites.map(f =>(
        <li key={f} className='cursor-pointer border bg-white py-2 px-4 mt-[10px] text-red-600 shadow-md text-center w-full'>
          <a href={f}>{f}</a>
        </li>
      ))}
    </ul>
  )
}

export default Favourite