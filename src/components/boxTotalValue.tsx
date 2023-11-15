'use client'

import { formatPrice } from '@/utils/priceFormatter'
import { useEffect, useState } from 'react'

export function BoxTotalValue() {
  const [value, setValue] = useState(67580)

  useEffect(() => {
    setInterval(() => {
      setValue((prevState) => prevState + 4000)
    }, 25200000)
  }, [setValue])

  return (
    <div className="w-full bg-secondary text-white p-2 rounded-md">
      <span>{formatPrice(value)}</span>
    </div>
  )
}
