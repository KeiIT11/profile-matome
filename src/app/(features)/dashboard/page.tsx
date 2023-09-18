import HomeNavbar from '@/app/_components/Header/navbar'
import Head from 'next/head'

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
                <main className='min-h-screen space-y-2'>
                    <div className="max-w-md mx-auto py-10 space-y-2 md:max-w-2xl">
                        <label className="label">
                            <span className="text-base label-text">Name</span>
                        </label>
                        <input type="text" placeholder="田中" className="w-full input input-bordered" />
                        <label className="label">
                            <span className="text-base label-text">UserID</span>
                        </label>
                        <input type="text" placeholder="tanaka13" className="w-full input input-bordered" />
                        <div>
                            <button className="btn btn-md btn-primary">Save</button>
                        </div>
                    </div>

                </main>
            </body>
        </>
    )
}