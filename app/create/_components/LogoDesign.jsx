'use client'
import React,{useState} from 'react'
import HeadDesc from './HeadDesc'
import Lookup from '@/app/_data/Lookup'
import LogoDesig from '@/app/_components/LogoDesig'
import Image from 'next/image'

const LogoDesign = ({onHandleInputChange}) => {
   const [selectedOption, setSelectedOption] = useState()
    return (
    <div className='my-10'>
        <HeadDesc title={Lookup.LogoDesignTitle} desc={Lookup.LogoDesignDesc}/>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-10 mt-10'>
            {LogoDesig.map((design,index)=>(
                 <div key={index} className={`flex p-1 cursor-pointer ${selectedOption == design.name && 'border-2 rounded-sm border-primary'} `}>
                    <Image src={design.image} alt={design.name} onClick={() => {
                                setSelectedOption(design.name);
                                onHandleInputChange(design.name)
                            }} className='w-full rounded-xl h-[150px]' width={200} height={200}/>
                 </div>
            ))}
        </div>
    </div>
  )
}

export default LogoDesign