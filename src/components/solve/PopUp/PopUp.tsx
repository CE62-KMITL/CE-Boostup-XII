import DarkBackground from "../../utils/DarkBackground";
import Button from "../../utils/Button";
import { usePopUp } from "../../../hooks/pop-up.hook";

type PopUpProps = {
    title: string;
    content?: string;
    isCode?: boolean;
    isBoth?: boolean;
    code?: string;
}

export default function PopUp({ title, content, isCode = false, isBoth = false, code }: PopUpProps) {
    const { setPopUp } = usePopUp();

    const formattedText = (text?: string) => {
        return text?.split('\n').join('<br />');
    }

    return (
        <>
            <DarkBackground />
            <div className="flex justify-center items-center fixed top-0 w-screen h-screen z-50">
                <div className="w-[500px] bg-white rounded-[30px] fixed p-[24px] flex flex-col text-center items-center">
                    <div className="space-y-2">
                        <h3 dangerouslySetInnerHTML={{ __html: formattedText(title) as string }} className="text-2xl font-bold text-center" />
                        {isCode ?
                            <div dangerouslySetInnerHTML={{ __html: formattedText(content) as string }} className="border border-gray-400 p-[18px] rounded-[10px] text-start" />
                            :
                            !isBoth && <p dangerouslySetInnerHTML={{ __html: formattedText(content) as string }} className="font-medium" />
                        }
                        {isBoth &&
                            <div className="p-[18px] rounded-[10px] text-start items-center flex flex-col">
                                <p dangerouslySetInnerHTML={{ __html: formattedText(content) as string }} className="font-medium" />
                                <div className="border border-gray-400 mt-5 p-5 w-fit rounded-[10px]">
                                    <p dangerouslySetInnerHTML={{ __html: formattedText(code) as string }} className="font-medium" />
                                </div>
                            </div>
                        }
                    </div>
                    <Button text="รับทราบ" className="w-[169px] bg-accent text-white py-[8px] rounded-[10px] mt-5" ClickFunc={() => setPopUp(undefined)} />
                </div>
            </div>
        </>
    );
}