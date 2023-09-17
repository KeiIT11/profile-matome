export default function ShowingSelfIntroduction({ introduction }: { introduction: string }) {
    return (
        <div className="max-w-md mx-auto py-10 md:max-w-2xl">
            <p className="whitespace-pre-wrap">{introduction}</p>
        </div>

    )
}