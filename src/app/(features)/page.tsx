import Image from 'next/image'
import Homenavbar from '../_components/Header/navbar'
import Head from 'next/head'
//import Link from 'next/link';
export default function Home() {
  return (
    <>
      <Head>
        <title>test</title>
      </Head>
      <body className='flex flex-col min-h-screen'>
        <header>
          <Homenavbar />
        </header>
        <main>
          <div>
            <p>content</p>
          </div>
        </main>
      </body>
    </>
  )
}
