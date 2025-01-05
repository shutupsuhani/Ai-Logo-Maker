import React from 'react'
import HeadDesc from './HeadDesc'
import Lookup from '@/app/_data/Lookup'

const LogoIdea = () => {
  return (
    <div className='my-10'>
       
       <HeadDesc title={Lookup.LogoIdeaTitle} desc={Lookup.LogoIdeaDesc} />

    </div>
  )
}

export default LogoIdea