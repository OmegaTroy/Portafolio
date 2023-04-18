import React from 'react'

const today = new Date()

const Footer = () => {
  return (
    <footer className='w-full h-10 flex justify-center items-center text-white text-base bg-grayDrak'>&copy; {today.getFullYear()} Julian iocco. All rights reserved.</footer>
  )
}

export default Footer