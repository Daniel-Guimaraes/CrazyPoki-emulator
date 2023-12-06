import { Form } from '@/components/form'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="p-5 w-full h-screen flex flex-col justify-stretch">
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/logo-estrelaLab.svg"
          width={60}
          height={60}
          alt=""
          className="mb-4"
        />
        <Image src="/logo-crazy-poki.svg" alt="" width={280} height={166} />
        <p className="text-xl text-white font-bold bottom-4 mt-3">
          Inteligência Crazy POKI
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
