import CheckIcon from "../../../assets/CheckIcon.svg"

type TitleCardProps = {
    title: string;
    difficulty: number;
    userSolvedCount: number;
}

export default function TitleCard({ title = "โจทย์ปัญหา", difficulty = 0, userSolvedCount = 0 }: TitleCardProps) {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < difficulty; i++) {
            stars.push(
                <svg key={i} className="w-[20px] h-[20px]" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.64371 1.6665L12.127 6.88317L17.6801 7.72484L13.6619 11.7832L14.6102 17.5165L9.64371 14.8082L4.67721 17.5165L5.6255 11.7832L1.6073 7.72484L7.16046 6.88317L9.64371 1.6665Z" fill="#E2AD39" stroke="#E2AD39" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        }
        for (let j = 0; j < 5 - difficulty; j++) {
            stars.push(
                <svg key={j + difficulty} className="w-[20px] h-[20px]" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0003 1.66675L12.5753 6.88341L18.3337 7.72508L14.167 11.7834L15.1503 17.5167L10.0003 14.8084L4.85033 17.5167L5.83366 11.7834L1.66699 7.72508L7.42533 6.88341L10.0003 1.66675Z" stroke="#E2AD39" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        }
        return stars;
    };

    return (
        <div className="h-[122px] w-full bg-jenna py-5 mt-[18px] rounded-xl flex flex-col items-center justify-between">
            <h2 className="text-2xl font-bold">{title}</h2>
            <div className="flex justify-between w-full px-[30px]">
                <div className="flex space-x-1">
                    <img src={CheckIcon} />
                    <p>ผ่านแล้ว {userSolvedCount} คน</p>
                </div>
                <div className="flex space-x-1">
                    <p>ระดับความยาก</p>
                    <div className="flex space-x-1">
                        {renderStars()}
                    </div>
                </div>
            </div>
        </div>
    )
}