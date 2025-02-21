'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromTop } from '@/utlis/motion'
import Image from 'next/image'
const Encriyption = () => {
  return (
    <div className='flex flex-row relative items-center justify-center w-full h-full'>
      <div className='absolute w-auto h-auto top-[-150px] z-[5]'>
           <motion.div
           variants={slideInFromTop}
           className='text-[40px] font-medium text-center text-gray-200'
           >
Performance
<span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
  {" "}
& {" "}
</span>
Security
 </motion.div>
      </div>
      <div className='flex flex-col items-center justify-center translate-y-[-50px] min-h-screen absolute z-[20] w-auto h-auto '>
         <div className='flex flex-col items-center group cursor-pointer w-auto h-auto '>
                  <Image
                  src = '/LockTop.png'
                  alt='Lock Top'
                  width={50}
                  height={50}
                  className='w-[50px] translate-y-5  transition-all duration-200 group-hover:translate-y-11 '
                  />
                  <Image
                  src = '/LockMain.png'
                  alt='Lock Main'
                  width={70}
                  height={70}
                  className='z-10 '
                  />

         </div>
         <div className='Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042f88b] opacity-[0.9]'>
              <h1 className='Welcome-text text-[12px]'>Encriyption</h1>
         </div>
      </div>
      <div className=' absolute z-[20] bottom-[10px] px-[5px]'>
      <div className='crusive text-[20px] font-medium text-center text-gray-300'>
          Secure Your Data With end-to-end Encriyption
      </div>
      </div>
    <div className='w-full flex items-start justify-center absloute'>
         <video 
         loop 
         muted
         autoPlay
         playsInline
         preload='false'
         className='w-full h-auto'
        src='/encryption.webm'
         />
      </div>
    </div>
  )
}

export default Encriyption
