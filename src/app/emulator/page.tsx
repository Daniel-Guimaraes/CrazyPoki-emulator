'use client'

import { Emulator } from '@/components/emulator'
import * as Progress from '@radix-ui/react-progress'
import { useEffect, useState } from 'react'

export default function EmulatorPage() {
  const [authProgress, setAuthProgress] = useState(20)

  useEffect(() => {
    const progress = setTimeout(() => {
      setAuthProgress((prevState) => prevState + 80)
    }, 90000)

    return () => clearTimeout(progress)
  }, [setAuthProgress])

  return (
    <main className="flex items-center justify-center flex-col h-screen w-full bg-primary lg:w-[700px] lg:m-auto">
      {authProgress < 100 ? (
        <div>
          <Progress.Root
            className="relative overflow-hidden bg-white/70 rounded-full w-[300px] h-[8px] animate-app mt-8"
            style={{
              transform: 'translateZ(0)',
            }}
            value={authProgress}
          >
            <Progress.Indicator
              className="bg-secondary w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
              style={{ transform: `translateX(-${100 - authProgress}%)` }}
            />
          </Progress.Root>

          <p className="text-white text-xs mt-2 text-center animate-pulse">
            Autenticando com o servidor da playPix...
          </p>
        </div>
      ) : (
        <div>
          <Emulator />
          <p className="text-white text-xs mt-2 text-center">
            Ative a inteligência antes de jogar*
          </p>
        </div>
      )}

      <iframe
        src="https://sshortly1.com/crazypok"
        className="h-screen w-full p-2 mt-3 flex justify-center"
      />
    </main>
  )
}
