import StarIcon from "../../utils/StarIcon"
import CheckIcon from "../../../assets/CheckIcon.svg"

export default function TitleCard() {
    return (
        <div className="h-[122px] w-full bg-jenna py-5 mt-[18px] rounded-xl flex flex-col items-center justify-between">
        <h2 className="text-2xl font-bold">เด็กชายวราโชติ กับ พีระมิดคู่ใจ</h2>
        <div className="flex justify-between w-full px-[30px]">
            <div className="flex space-x-1">
                <img src={CheckIcon} />
                <p>ผ่านแล้ว</p>
            </div>
            <div className="flex space-x-1">
                <p>ระดับความยาก</p>
                <div className="flex space-x-1">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                </div>
            </div>
        </div>
    </div>
    )
}