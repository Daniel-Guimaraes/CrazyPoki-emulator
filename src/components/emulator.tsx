'use client'

import Image from 'next/image'
import { useState } from 'react'

export function Emulator() {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <div className="p-5">
      <div
        className={`relative w-[320px] text-center rounded-full h-16 cursor-pointer flex items-center p-5 transition-all ${
          isClicked ? 'bg-green-600 animate-pulse' : 'bg-secondary'
        }`}
        onClick={handleClick}
      >
        <Image
          src="/crazy-poki.png"
          width={80}
          height={60}
          alt=""
          className={`absolute transform ${
            isClicked ? 'translate-x-[200px]' : 'translate-x-0'
          } transition-all duration-500`}
        />

        <p
          className={`transform absolute ${
            isClicked ? 'translate-x-0' : 'translate-x-[140px]'
          } transition-all duration-500 text-white font-bold `}
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
