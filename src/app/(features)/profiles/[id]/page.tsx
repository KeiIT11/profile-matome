import Head from "next/head"

export function generateStaticParams() {
    //動的ルーティングをするために、userIDのリストが必要。
    //ただし、今は仮の値を与える。
    return [{ id: 'ranmaru' }, { id: 'sweet' }]
}

//dynamicParams = falseにすることで、動的ルーティングされたアドレス
//以外にアクセスすると404ページにリダイレクトする。
//例：/profiles/unknown など定義していないアドレスに接続すると
//404に飛ばされる。
export const dynamicParams = false // true | false,

export default function Page({ params }: { params: { id: string } }) {
    const { id } = params
    return (
        <>
            <Head>
                <title>test</title>
            </Head>
            <body className='flex flex-col min-h-screen'>
                <main>
                    <div>
                        <p>content</p>
                        <p>userID: {id}</p>
                    </div>
                </main>
            </body>
        </>
    )
}