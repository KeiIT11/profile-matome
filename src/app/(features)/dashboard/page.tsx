"use client"

import HomeNavbar from '@/app/_components/Header/navbar'
import Head from 'next/head'
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInput {
    userName: string;
    userID: string;
    introduction: string;
    snsIndexList: string
}

export default function Home() {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="max-w-md mx-auto py-10 space-y-2 md:max-w-2xl">
                            <label className="userName">
                                <span className="text-base label-text">Name</span>
                            </label>
                            <input {...register('userName', { required: true, maxLength: 20 })} type="text" placeholder="田中" className="w-full input input-bordered" />
                            {errors.userName && <div>入力が必須の項目です</div>}

                            <label className="userID">
                                <span className="text-base label-text">UserID</span>
                            </label>
                            <input {...register('userID', { required: true, maxLength: 20 })} type="text" placeholder="@tanaka" className="w-full input input-bordered" />
                            {errors.userName && <div>入力が必須の項目です</div>}

                            <label className="introduction">
                                <span className="text-base label-text">Introduction</span>
                            </label>
                            <input {...register('introduction', { required: true, maxLength: 20 })} type="text" placeholder="趣味は絵を描くことです" className="w-full input input-bordered" />
                            {errors.userName && <div>入力が必須の項目です</div>}


                            <div>
                                <button className="btn btn-md btn-primary">Save</button>
                            </div>
                        </div>
                    </form>
                </main>
            </body>
        </>
    )
}