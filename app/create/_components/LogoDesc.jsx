import React from 'react'
import HeadDesc from './HeadDesc'
import Lookup from '@/app/_data/Lookup'

const LogoDesc = ({onHandleInputChange,formData}) => {
    return (
        <div className='my-10'>

         <HeadDesc title={Lookup.LogoDesctitle} desc={Lookup.LogoDescDesc}/>  
          <input type='text' className='p-3 focus:outline-none border mt-5 border-dashed shadow-md rounded-md w-full'  placeholder={Lookup.InputTitleplaceholder} onChange={(e)=>onHandleInputChange(e.target.value)} value={formData.desc}/>  
            
       </div>
    )
}

export default LogoDesc