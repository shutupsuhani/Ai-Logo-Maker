'use client'

import React, { useState } from 'react'
import lookup from '../_data/lookup'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
   const [logoTitle,setLogoTitle]=useState('');
  
    return (
    <div className='flex items-center mt-24 flex-col gap-5'>
       <h1 className='text-primary font-bold text-5xl text-center'>{lookup.HeroHeading}</h1>
        <h2 className='font-bold text-5xl text-center'>{lookup.HeroSubHeading}</h2>
        <h2 className='text-lg text-gray-500'>{lookup.HeroDesc}</h2>
        
        <div className='w-full mt-10 flex gap-6 max-w-2xl'>
            <input placeholder={lookup.InputTitleplaceholder} onChange={(e)=>setLogoTitle(e?.target.value)} className='p-3 focus:outline-none border border-dashed shadow-md rounded-md w-full'/>
            <Link href={'/create?title='+logoTitle}><Button className='w-full p-6'>Get Started <ArrowRight/> </Button></Link>
        </div>
    
    </div>
  )
}

export default Hero
