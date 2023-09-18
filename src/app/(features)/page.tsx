import HomeNavbar from '../_components/Header/navbar'
import Head from 'next/head'

const appintroduction: string = `
Profileまとめは、簡単におしゃれなプロフィール画面が作れるWebサイトです。

SNSアカウントをまとめたり、QRコードでシェアすることもできます。

イベントを募集したり参加することができるので、初対面に仲を深めるのに役立ちます。



`


export default function Home() {
  return (
    <>
      <Head>
        <title>test</title>
      </Head>
      <body>
        <header>
          <HomeNavbar />
        </header>
        <main className='min-h-screen'>
          <div className="max-w-md mx-auto py-10 md:max-w-2xl">
            <p className="whitespace-pre-wrap">{appintroduction}
            </p>
            <p className="whitespace-pre-wrap">イベントリスト
            </p>
          </div>
        </main>
      </body>
    </>
  )
}
