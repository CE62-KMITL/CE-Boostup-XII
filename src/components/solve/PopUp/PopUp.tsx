import DarkBackground from "../../utils/DarkBackground";
import Button from "../../utils/Button";
import { usePopUp } from "../../../hooks/pop-up.hook";

type PopUpProps = {
    title: string;
    content?: string;
    isCode?: boolean;
}

export default function PopUp({ title, content, isCode = false }: PopUpProps) {
    const { setPopUp } = usePopUp();

    return (
        <>
            <DarkBackground />
            <div className="flex justify-center items-center fixed top-0 w-screen h-screen z-50">
                <div className="w-[500px] bg-white rounded-[30px] fixed p-[24px] flex flex-col text-center items-center">
                    <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-center">{title}</h3>
                        {isCode ?
                            <div className="border border-gray-400 p-[18px] rounded-[10px] text-start">{content}</div>
                            :
                            <p className="font-medium">{content}</p>
                        }
                    </div>
                    <Button text="รับทราบ" className="w-[169px] bg-accent text-white py-[8px] rounded-[10px] mt-5" ClickFunc={() => setPopUp()} />
                </div>
            </div>
        </>
    );
}