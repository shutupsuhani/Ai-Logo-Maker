import React from 'react'

const HeadDesc = ({title,desc}) => {
  return (
    <div>
        <h2 className='font-bold text-3xl text-primary'>{title}</h2>
        <p className='text-lg mt-2 text-gray-500'>{desc}</p>
    </div>
  )
}

export default HeadDesc