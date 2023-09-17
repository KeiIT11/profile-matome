import Image from "next/image"

export default function ShowingProfileIcon({ iconPath, userName, userID }: { iconPath: string, userName: string, userID: string }) {
    return (
        <div className="flex flex-col justify-center items-center">
            <Image
                src={iconPath}
                alt="ProfileIcon"
                width={100}
                height={24}
                className="rounded-full border h-20 w-20 object-cover"
            />
            {/* name */}
            <p>{userName}</p>
            {/* userID */}
            <p>{userID}</p>
        </div>
    )
}