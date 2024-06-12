import SuccessIcon from '../../../assets/SuccessIcon.svg';
import { useEffect } from 'react';

type SuccessCardProps = {
    setShow?: React.Dispatch<React.SetStateAction<boolean>>;
    type?: "submit" | "save";
};

export default function SuccessCard({ setShow, type }: SuccessCardProps) {
    useEffect(() => {
        setTimeout(() => {
            if (setShow)
                setShow(false);
        }, 2000);
    });

    return (
        <div className="flex justify-center items-center fixed top-0 w-screen h-screen z-50">
            <div className="flex flex-col bg-black opacity-70 w-[170px] h-[170px] rounded-[10px] items-center justify-evenly">
                <img src={SuccessIcon} alt="SuccessIcon" />
                <p className="text-white text-[16px] font-semibold text-center" dangerouslySetInnerHTML={{ __html: `บันทึกโจทย์แล้ว<br />โจทย์อยู่ในสถานะ ${type === "save" ? "Draft" : "Awaiting Approval"}` }} />
            </div>
        </div>
    )
}