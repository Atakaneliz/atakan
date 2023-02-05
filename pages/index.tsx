
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineTwitter } from 'react-icons/ai'
export default function Home() {
  return (
    <>
      <Head>
        <title>Atakan</title>
        <meta name="description" content="Atakan Eliz'in kişisel Websitesi" />
        <meta name='keywords' content='Atakan,Atakan Eliz,Eliz,Atakaneliz' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-[url(/bg.jpg)] bg-cover bg-center relative w-full h-full min-h-screen p-4 md:p-20 flex flex-col items-start justify-start '>
        <div className='bg-black/30 backdrop-blur-md rounded-md p-10 z-10 flex gap-5 items-center'>
          <Link href='https://twitter.com/atakaneliz' className='flex items-center gap-2 hover:opacity-50'>
            <Image src='/twitter1.svg' width={48} height={48} alt="" />
          </Link>
          <Link href='https://github.com/Atakaneliz' className='flex items-center gap-2 hover:opacity-50'>
            <Image src='/github.svg' width={48} height={48} alt="" />
          </Link>
          <Link href='https://www.linkedin.com/in/atakan-eliz-994920247/' className='flex items-center gap-2 hover:opacity-50'>
            <Image src='/linkedin.svg' width={48} height={48} alt="" />
          </Link>
        </div>
      </main>
    </>
  )
}
