'use client'

import * as Progress from '@radix-ui/react-progress'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

export function ProgressBar() {
  const [progress, setProgress] = useState(0)
  const [messages, setMessages] = useState('')

  const addMessages = useCallback(() => {
    switch (progress) {
      case 0:
        setMessages('Introduzindo Hash...')
        break
      case 50:
        setMessages('Codificando o navegador...')
        break
      case 75:
        setMessages('IA sendo inserida no cadastro...')
        break
      default:
        break
    }
  }, [setMessages, progress])

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 25,
      )
    }, 5000)

    addMessages()

    if (progress === 100) {
      clearInterval(progressInterval)
    }

    return () => clearInterval(progressInterval)
  }, [progress, setProgress, addMessages])

  return (
    <div className="mt-80">
      <Progress.Root
        className="relative overflow-hidden bg-white/70 rounded-full w-[300px] h-[8px] animate-app"
        style={{
          transform: 'translateZ(0)',
        }}
        value={progress}
      >
        <Progress.Indicator
          className="bg-secondary w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      </Progress.Root>

      <div className="flex flex-col items-center gap-2 mt-4">
        {progress < 100 ? (
          <span className="text-white text-sm animate-pulse">{messages}</span>
        ) : (
          <span className="text-white text-sm animate-app">
            Configuração aplicada, faça seu cadastro!
          </span>
        )}
      </div>

      {progress === 100 && (
        <Link
          href="/IA-crazy-poki"
          className="w-full p-2 text-white bg-secondary rounded-md mt-44 animate-app flex justify-center uppercase"
        >
          Iniciar cadastro VIP
        </Link>
      )}
    </div>
  )
}
