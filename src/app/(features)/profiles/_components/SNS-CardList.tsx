import SNSCard from "./SNS-Card"

export default function SNSCardList({ snsCardIndexList }: { snsCardIndexList: SNSCardIndex[] }): React.ReactNode {
    return (
        <div className="max-w-md mx-auto grid grid-cols-4 md:max-w-2xl gap-3 ">
            {snsCardIndexList.map((snsCardIndex: SNSCardIndex, index: number) => {
                return (

                    <SNSCard key={index} snsCardIndex={snsCardIndex} />
                );
            })}
        </div>
    );
}