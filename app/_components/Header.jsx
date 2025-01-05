import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='px-10 lg:px-32 xl:px-48 2xl:px-56 p-4 flex justify-between items-center shadow-lg ' >
       <Image src={'./logo1.svg'} alt='logo' width={50} height={50}/>

       <Button>Get Started <ArrowRight/> </Button>
    </div>
  )
}

export default Header
