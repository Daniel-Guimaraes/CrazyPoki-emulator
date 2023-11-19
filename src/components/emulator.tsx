'use client'

import Image from 'next/image'
import { useState } from 'react'

export function Emulator() {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <div
      className={`w-full relative text-center rounded-full mt-5 h-16 cursor-pointer flex items-center px-5 transition-all ${
        isClicked ? 'bg-green-600 animate-pulse' : 'bg-secondary'
      }`}
      onClick={handleClick}
    >
      <div
        className={`absolute transform ${
          isClicked ? 'translate-x-[200px]' : 'translate-x-0'
        } transition-all duration-500`}
      >
        <Image src="/crazy-poki.png" width={100} height={80} alt="" />
      </div>

      <p
        className={`transform ${
          isClicked ? 'translate-x-0' : 'translate-x-[150px]'
        } transition-all duration-500 text-white font-bold `}
      >
        {isClicked ? 'Crazy Poky Hackeado' : 'Toque para Hackear'}
      </p>
    </div>
  )
}
