import { useCompilerSettingStore } from "../../../store/zustand/compiler-setting.zustand"

type ExampleCardProps = {
    title: string;
    input: string;
    output: string;
    inputMode?: boolean;
}

export default function ExampleCard({ title, input, output, inputMode = false }: ExampleCardProps) {
    const { setInput } = useCompilerSettingStore();

    return (
        <div className="py-3">
            <h2 className="text-lg font-bold">{title}</h2>
            <div className="flex">
                <div className="flex flex-col w-1/2">
                    <p>input :</p>
                    {
                        inputMode ? (
                            <div className="bg-stone02 w-5/6 rounded-[10px] p-3 font-semibold">
                                <textarea className="w-full bg-stone02 border-none" placeholder={input} onChange={(e) => setInput(e.target.value)} />
                            </div>
                        ) :
                            <textarea className="bg-stone02 w-5/6 rounded-[10px] p-3 font-semibold" disabled>{input}</textarea>
                    }
                </div>
                <div className="flex flex-col w-1/2">
                    <p>output :</p>
                    <div className="bg-stone02 w-5/6 rounded-[10px] p-3 font-semibold" dangerouslySetInnerHTML={{ __html: output }} />
                </div>
            </div>
        </div>
    )
}