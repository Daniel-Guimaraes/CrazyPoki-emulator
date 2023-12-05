import { Form } from '@/components/form'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="p-10 w-full h-screen flex flex-col justify-stretch">
      <div className="flex flex-col justify-center items-center relative">
        <Image src="/star.svg" width={80} height={80} alt="" />
        <Image src="/crazy-poki.png" alt="" width={602} height={465} />
        <p className="text-xl text-white font-bold absolute bottom-4">
          IA Hacker Crazy POK
        </p>
      </div>

      <Form />

      <div className="w-full flex gap-3 flex-col items-center mt-auto">
        <Image src="/support.png" alt="" width={40} height={40} />
        <Link
          href="https://t.me/estrelalab"
          className="text-sm text-white hover:underline"
        >
          Suporte? Fale com o atendente
        </Link>
      </div>
    </main>
  )
}
