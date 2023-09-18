import HomeNavbar from '../_components/Header/navbar'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>test</title>
      </Head>
      <body className='flex flex-col min-h-screen'>
        <header>
          <HomeNavbar />
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
