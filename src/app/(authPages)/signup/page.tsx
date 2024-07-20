import { IUserSchema, SignUpSchema } from '@/ZodSchemas/SignUp'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'

import { useForm } from 'react-hook-form'
import Image from 'next/image'
const Page = () => {

    const form = useForm()

        


  return (
    <div className='flex w-full h-screen max-h-screen'>
        <div className='w-[50%]'>
            
        </div>
        <div className='w-[50%]'>
            <Image src={'/assets/section.png'} alt='section'></Image>
        </div>
      
    </div>
  )
}

export default Page
