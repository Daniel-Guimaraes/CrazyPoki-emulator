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
    inputValue.length >= 15 && !validateKey.test(inputValue)

  return (
    <form action="" className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-1 mt-5">
        <span className="text-white text-sm">Insira sua Key</span>
        <input
          type="text"
          placeholder="Insira uma key válida"
          className="w-full bg-secondary text-white p-2 rounded-md text-sm placeholder:text-white/60 outline-none focus-within:ring-1 focus-within:ring-blue-200 border border-${}"
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        {isValidatedInput && (
          <span className="text-sm text-red-500 mt-2">
            Padrão de Key inválida!
          </span>
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
        className="w-full bg-secondary p-3 rounded-md mt-6 text-white text-md uppercase hover:bg-secondary/80 font-bold cursor-pointer flex justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isDisabled}
        onClick={() => router.push('/insert-hacker')}
      >
        Entrar
      </button>
    </form>
  )
}
