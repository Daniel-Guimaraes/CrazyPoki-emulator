'use client'

import Link from 'next/link'
import { BoxTotalValue } from './boxTotalValue'
import { useState } from 'react'

export function Form() {
  const [inputValue, setInputValue] = useState('')

  function handleInputValue(e: string) {
    setInputValue(e)
  }

  const isDisabled = inputValue.length < 8

  return (
    <form action="" className="flex flex-col gap-4">
      <div className="flex flex-col gap-1 mt-5">
        <span className="text-white text-sm">Key</span>
        <input
          type="text"
          placeholder="Insira sua key"
          className="w-full bg-secondary text-white p-3 rounded-md text-sm placeholder:text-white/40 outline-none focus-within:ring-1 focus-within:ring-blue-200"
          onChange={(e) => handleInputValue(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-sm text-white">
          Valor total distribuído aos usuários
        </span>

        <BoxTotalValue />
      </div>

      <button
        type="submit"
        className="w-full bg-secondary p-2 rounded-md mt-10 text-white hover:bg-secondary/80 font-bold cursor-pointer flex justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isDisabled}
      >
        {isDisabled ? (
          'Entrar'
        ) : (
          <Link href="/insert-hacker" prefetch className="w-full">
            Entrar
          </Link>
        )}
      </button>
    </form>
  )
}
