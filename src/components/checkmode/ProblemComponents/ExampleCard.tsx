import { usePopUp } from "../../../hooks/pop-up.hook";
import { useCompilerSettingStore } from "../../../store/zustand/compiler-setting.zustand"
import InfoIcon from "../../../assets/InfoIcon.svg"

type ExampleCardProps = {
    title: string;
    input: string;
    output: string;
    inputMode?: boolean;
}

export default function ExampleCard({ title, input, output, inputMode = false }: ExampleCardProps) {
    const { setInput } = useCompilerSettingStore();
    const { setPopUp } = usePopUp();

    return (
        <div className="py-2">
            <div className="flex gap-2">
                <h2 className="text-[18px] font-bold">{title}</h2>
                <img
                    src={InfoIcon}
                    alt="info"
                    className="w-[20px] h-[20px] translate-y-[2px] hover:cursor-pointer"
                    onClick={() => setPopUp(0)}
                />
            </div>
            <div className="flex gap-[16px]">
                <div className="flex flex-col w-full py-2">
                    <p className="mb-[4px] text-[14px] font-medium">input :</p>
                    {
                        inputMode ? (
                            <div className="bg-stone02 w-full rounded-[10px] p-2 text-[16px] font-medium">
                                <input type="text" className="w-full bg-jenna border-none" placeholder={input} onChange={(e) => setInput(e.target.value)} />
                            </div>
                        ) :
                            <div dangerouslySetInnerHTML={{ __html: input }} className="bg-stone02 w-full rounded-[10px] p-2 text-[16px] font-medium" />
                    }
                </div>
                <div className="flex flex-col w-full py-2">
                    <p className="mb-[4px] text-[14px] font-medium">output :</p>
                    <div dangerouslySetInnerHTML={{ __html: output }} className="bg-stone02 w-full rounded-[10px] p-2 text-[16px] font-medium" />
                </div>
            </div>
        </div>
    )
};