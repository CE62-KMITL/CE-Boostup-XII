type ExampleCardProps = {
    title: string;
    input: string;
    output: string;
}

export default function ExampleCard({ title, input, output }: ExampleCardProps) {
    return (
        <div className="py-3">
            <h2 className="text-lg font-bold">{title}</h2>
            <div className="flex">
                <div className="flex flex-col w-1/2">
                    <p>input :</p>
                    <div className="bg-jenna w-5/6 rounded-[10px] p-3 font-semibold">
                        {input}
                    </div>
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