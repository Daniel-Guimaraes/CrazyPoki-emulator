'use client'

import { BoxTotalValue } from './boxTotalValue'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { validateKey } from '@/utils/validateKey'

export function Form() {
  const [inputValue, setInputValue] = useState('')
  const router = useRouter()

  const isDisabled = !validateKey.test(inputValue)
  const isValidatedInput =
    inputValue.length >= 12 && !validateKey.test(inputValue)

  return (
    <form action="" className="flex flex-col gap-4">
      <div className="flex flex-col gap-1 mt-5">
        <span className="text-white text-sm">Key</span>
        <input
          type="text"
          placeholder="Insira sua key"
          className="w-full bg-secondary text-white p-3 rounded-md text-sm placeholder:text-white/40 outline-none focus-within:ring-1 focus-within:ring-blue-200 border border-${}"
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        {isValidatedInput && (
          <span className="text-sm text-red-500 mt-2">Key inválida!</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-sm text-white">
          Valor total distribuído aos usuários
        </span>

        <BoxTotalValue />
      </div>

      <button
        type="button"
        className="w-full bg-secondary p-2 rounded-md mt-10 text-white hover:bg-secondary/80 font-bold cursor-pointer flex justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isDisabled}
        onClick={() => router.push('/insert-hacker')}
      >
        Entrar
      </button>
    </form>
  )
}
