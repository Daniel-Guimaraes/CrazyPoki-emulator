'use client'

import Image from 'next/image'
import { useState } from 'react'

export function Emulator() {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <div className="">
      <div
        className={`relative w-[320px] mt-4 text-center rounded-full h-16 cursor-pointer flex items-center  transition-all ${
          isClicked ? 'bg-green-600 animate-pulse' : 'bg-secondary'
        }`}
        onClick={handleClick}
      >
        <Image
          src="/logo-crazy-poki.svg"
          width={80}
          height={60}
          alt=""
          className={`absolute transform ${
            isClicked ? 'translate-x-[230px]' : 'translate-x-2'
          } transition-all duration-500`}
        />

        <p
          className={`transform absolute ${
            isClicked ? 'translate-x-4' : 'translate-x-[160px]'
          } transition-all duration-500 text-white font-bold text-sm`}
        >
          {isClicked ? 'Crazy Poky Hackeado' : 'Toque para Hackear'}
        </p>
      </div>

      <p className="text-white text-xs mt-2 text-center">
        Ative a inteligência antes de jogar*
      </p>
    </div>
  )
}
