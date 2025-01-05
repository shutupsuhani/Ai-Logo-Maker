'use client'

import React, { useState } from 'react'
import HeadDesc from './HeadDesc'
import Lookup from '@/app/_data/Lookup'
import { useSearchParams } from 'next/navigation'

const LogoTitle = ({onHandleInputChange}) => {
   const SearchParams=useSearchParams();
   const [title ,setTitle]=useState(SearchParams?.get('title')??'')
   return (
    <div className='my-10'>
        <HeadDesc title={Lookup?.Logotitle} desc={Lookup.LogotitleDesc}/>
        <input type='text' className='p-3 focus:outline-none border mt-5 border-dashed shadow-md rounded-md w-full' defaultValue={title} placeholder={Lookup.InputTitleplaceholder} onChange={(e)=>onHandleInputChange(e.target.value)}/>
    </div>
  )
}

export default LogoTitle