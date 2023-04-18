import Link from 'next/link'
import React from 'react'
import {BsLinkedin} from 'react-icons/bs'



const BtnContact = () => {
  return (
    <div className='absolute top-[68%] left-[2%]'>    
        <Link href='' className='my-4 flex items-center justify-center text-3xl text-FV bg-boton dark:text-boton dark:bg-white w-[50px] h-[50px] rounded-full'><BsLinkedin/></Link>    
    </div>
  )
}

export default BtnContact