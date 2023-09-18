import Head from "next/head"
import Image from "next/image"
import SNSCardList from "../_components/SNS-CardList";
import fetchUserSNSCardIndex from "../_apis/fetchUser";
import ShowingSelfIntroduction from "../_components/SelfIntroduction";
import ShowingProfileIcon from "../_components/ProfileIcon";
import HomeNavbar from "@/app/_components/Header/navbar";

//dynamicParams = falseにすることで、動的ルーティングされたアドレス
//以外にアクセスすると404ページにリダイレクトする。
//例：/profiles/unknown など定義していないアドレスに接続すると
//404に飛ばされる。
export const dynamicParams = false // true | false,
export function generateStaticParams() {
    //動的ルーティングをするために、userIDのリストが必要。
    //ただし、今は仮の値を与える。
    return [{ id: 'ranmaru' }, { id: 'sweet' }]
}

//サンプル用自己紹介文
const introductionSample: string = `
就活用のサンプルをコピー
はじめまして、岡山県立大学３年の伊藤嵐丸と申します。
私は普段大学では、学科の名前の通り、情報通信に関することとか、アルゴリズムや人工知能とかについても学んでいます。
私が大学生活で特に力を入れたのが3つあって、

１、英語の勉強
主にTOEICの勉強を頑張って840点取ることが出来ました。１ヶ月の勉強で取ることができたのですが、それは勉強の方法について１０冊以上の本を読んで、効率の良い勉強法を身につけられたことが関係していると思います。

２、アプリ開発
個人開発でアプリを２つリリースしました。その経験を活かして、勉強できない人を助ける個人開発でアプリを２つリリースしました。
アプリの内容としては、勉強できないのを克服して、勉強できない人を助けるアプリを作りました。
・・・
`;

export default function Page({ params }: { params: { id: string } }) {
    const { id } = params
    const allSNSCardIndex = fetchUserSNSCardIndex()

    return (
        <>
            <Head>
                <title>test</title>
            </Head>
            <body>
                <header>
                    <HomeNavbar />
                </header>
                <main className='min-h-screen p-20'>
                    <ShowingProfileIcon iconPath="/pokemon.jpeg" userName="ランマル" userID="ranmaru" />
                    <ShowingSelfIntroduction introduction={introductionSample} />
                    <SNSCardList snsCardIndexList={allSNSCardIndex} />
                </main>
            </body>
        </>
    )
}


