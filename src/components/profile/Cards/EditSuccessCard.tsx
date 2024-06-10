import { useEffect } from "react";
import SuccessIcon from "../../../assets/SuccessIcon.svg";
import { useProfileComponentsStore } from "../../../store/zustand/profile-components.zustand";

export default function EditSuccessCard() {
    const { setComponents } = useProfileComponentsStore();

    useEffect(() => {
        setTimeout(() => {
            setComponents(null);
        }, 2000);
    });

    return (
        <div className="flex justify-center items-center fixed top-0 w-screen h-screen z-50">
            <div className="flex flex-col bg-black opacity-70 w-[170px] h-[170px] rounded-[10px] items-center justify-evenly">
                <img src={SuccessIcon} alt="SuccessIcon" />
                <p className="text-white text-[18px] text-center font-bold">แก้ไขโปรไฟล์สำเร็จ</p>
            </div>
        </div>
    );
}