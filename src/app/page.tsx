import { Form } from '@/components/form'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="p-5 w-full h-screen flex flex-col">
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/logo-estrelaLab.svg"
          width={40}
          height={40}
          alt=""
          className="mb-4"
        />

        <Image src="/logo-crazy-poki.svg" alt="" width={200} height={166} />

        <p className="text-xl text-white font-bold bottom-4 mt-3">
          Inteligência Crazy POKI
        </p>

        <Form />
      </div>

      <div className="w-full flex gap-3 flex-col items-center mt-14">
        <Image src="/support.png" alt="" width={55} height={55} />
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
