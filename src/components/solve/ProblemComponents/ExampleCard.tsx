type ExampleCardProps = {
    title: string;
    input: string;
    output: string;
    inputMode?: boolean;
}

export default function ExampleCard({ title, input, output, inputMode = false }: ExampleCardProps) {
    return (
        <div className="py-3">
            <h2 className="text-lg font-bold">{title}</h2>
            <div className="flex">
                <div className="flex flex-col w-1/2">
                    <p>input :</p>
                    {
                        inputMode ? (
                            <div className="bg-jenna w-5/6 rounded-[10px] p-3 font-semibold">
                                <input type="text" className="w-full bg-jenna border-none" placeholder={input} />
                            </div>
                        ) :
                            <div className="bg-jenna w-5/6 rounded-[10px] p-3 font-semibold">
                                {input}
                            </div>
                    }
                </div>
                <div className="flex flex-col w-1/2">
                    <p>output :</p>
                    <div className="bg-jenna w-5/6 rounded-[10px] p-3 font-semibold">
                        {output}
                    </div>
                </div>
            </div>
        </div>
    )
}