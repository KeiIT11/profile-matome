import Image from "next/image"

export default function SNSCard({ key, snsCardIndex }: { key: number, snsCardIndex: SNSCardIndex }) {
    return (
        <div className="flex flex-col justify-center items-center bg-slate-50 rounded-xl shadow-md">
            <Image
                src="/pokemon.jpeg"
                alt={snsCardIndex.snsTitle + "-icon"}
                width={100}
                height={100}
                className="rounded-full border h-12 w-12 object-cover"
            />
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{snsCardIndex.snsTitle}</div>
            <p className="mt-2 text-slate-500">{"@" + snsCardIndex.snsID}</p>
            <div className="p-8">
                <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{snsCardIndex.description}</a>
            </div>
        </div>

    )
}