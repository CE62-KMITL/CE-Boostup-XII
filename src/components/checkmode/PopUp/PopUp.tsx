import Button from "../../utils/Button";
import DarkBackground from "../../utils/DarkBackground";

type PopupProps = {
    title: string;
    description: string;
    handleSubmit?: () => void;
    setPopup: React.Dispatch<React.SetStateAction<number | undefined>>;
};

export default function PopUp({ title, description, handleSubmit, setPopup }: PopupProps) {
    return (
        <div className="fixed top-0 left-0 z-50">
            <DarkBackground />
            <div className="z-50 w-[500px] h-[200px] bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[30px] py-[20px] flex flex-col items-center justify-between">
                <div className="flex flex-col items-center space-y-1">
                    <h3 className="text-[25px] font-bold text-black flex"><h3 className="text-accent">ยืนยัน&nbsp;</h3>{title}</h3>
                    <p className="text-[16px] text-stone04 text-center px-[16px]">{description}</p>
                </div>
                <div className="space-x-[24px] font-bold">
                    <Button type="button" text="ยกเลิก" ClickFunc={() => setPopup(undefined)} className="bg-white text-accent border border-accent w-[157px] h-[46px] rounded-[8px] self-center" />
                    <Button type="button" text="ยืนยัน" className="bg-accent text-white w-[157px] h-[46px] rounded-[8px] self-center" ClickFunc={handleSubmit} />
                </div>
            </div>
        </div>
    );
}
