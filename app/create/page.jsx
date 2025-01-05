'use client'
import React, { useState } from 'react'
import LogoTitle from './_components/LogoTitle'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import LogoDesc from './_components/LogoDesc'
import LogoDesign from './_components/LogoDesign'
import LogoIdea from './_components/LogoIdea'
import LogoPalette from './_components/LogoPalette'

const CreateLogo = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const onHandleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    
    console.log(formData)

  }

  return (
    <div className='mt-28 p-10 border rounded-xl 2xl:mx-72'>

      {step == 1 ?
        <LogoTitle onHandleInputChange={(e) => onHandleInputChange('title', e)} formData={formData}/> :
        step == 2 ?
          <LogoDesc onHandleInputChange={(e) => onHandleInputChange('desc', e)} formData={formData} /> :
          step == 3 ?
            <LogoPalette onHandleInputChange={(e) => onHandleInputChange('palette', e)} formData={formData} /> :
            step == 4 ?
              <LogoIdea onHandleInputChange={(e) => onHandleInputChange('idea', e)}  formData={formData}/> :
              step == 5 ?
                <LogoDesign onHandleInputChange={(e) => onHandleInputChange('design', e)} formData={formData} /> :
                null
      }

      <div className='flex items-center justify-between mt-10'>
        {step != 1 && <Button onClick={() => setStep(step - 1)}><ArrowLeft />Previous</Button>}
        <Button onClick={() => setStep(step + 1)} ><ArrowRight />Continue</Button>
      </div>
    </div>
  )
}

export default CreateLogo
