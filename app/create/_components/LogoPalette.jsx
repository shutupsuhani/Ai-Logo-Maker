'use client'
import React, { useState } from 'react'
import HeadDesc from './HeadDesc'
import Lookup from '@/app/_data/Lookup'
import Color from '@/app/_components/Color'

const LogoPalette = ({onHandleInputChange}) => {

    const [selectedOption, setSelectedOption] = useState()

    return (
        <div className='my-10'>
            <HeadDesc title={Lookup.LogoColorPaletteTitle} desc={Lookup.LogoColorPaletteDesc} />

            <div className='grid grid-cols-2  mt-10 md:grid-cols-4 gap-5'>
                {Color.map((pallete, index) => (
                    <div key={index} className={`flex p-1 cursor-pointer ${selectedOption == pallete.name && 'border-2 rounded-sm border-primary'} `}>
                        {pallete?.color.map((color, index) => (
                            <div className='h-24 w-full' onClick={() => {
                                setSelectedOption(pallete.name);
                                onHandleInputChange(pallete.name)
                            }} key={index} style={{ backgroundColor: color }}>

                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LogoPalette