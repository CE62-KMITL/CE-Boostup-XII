import { useState, useEffect } from "react";
import { ProblemModelResponse } from "../../types/response.type";

import TitleCard from "./ProblemComponents/TitleCard.tsx";
import DetailCard from "./ProblemComponents/DetailCard.tsx";
import ExampleCard from "./ProblemComponents/ExampleCard.tsx";

type ProblemProps = {
    problem?: ProblemModelResponse;
};

export default function Problem({ problem }: ProblemProps) {
    const [scrollPadding, setScrollPadding] = useState<number>(0);

    useEffect(() => {
        const problemDom = document.getElementById("problem-box");
        const backgroundDom = document.getElementById("problem-background");

        if (problemDom && backgroundDom) {
            const isOverflowing = problemDom.scrollHeight > problemDom.clientHeight;
            setScrollPadding(isOverflowing ? 4 : 16);
        }
    }, [problem]);

    return (
        <div className="flex flex-col justify-end max-w-[500px] min-w-[500px] h-full">
            <div id="problem-background" className="bg-stone01 w-full h-[calc(100%-55px)] rounded-[10px] p-[16px]" style={{ paddingRight: scrollPadding }}>
                <div id="problem-box" className="flex flex-col space-y-[16px] w-full h-full overflow-y-auto">
                    <div className="w-full h-fit">
                        <TitleCard
                            title={problem?.title as string}
                            difficulty={problem?.difficulty as number}
                            userSolvedCount={problem?.userSolvedCount as number}
                        />
                    </div>
                    <div className="bg-jenna w-full h-fit flex flex-col items-center rounded-[10px] p-[16px] text-[18px] font-medium">
                        <h4 className="text-[18px] font-bold">คำอธิบายโจทย์</h4>
                        <p className="underline">เรื่องเล่าจากโจทย์</p>
                        <p className="w-full break-words">{problem?.description}</p>
                        <p className="self-end text-[14px]">โดย พี่{problem?.owner.displayName}</p>
                    </div>
                    <DetailCard title="รูปแบบ input" content={problem?.input} />
                    <DetailCard title="รูปแบบ output" content={problem?.output} />
                    <DetailCard
                        title="ข้อจำกัด"
                        content={
                            <p>
                                {problem?.bannedFunctions.map((func, index) => (
                                    <textarea className="bg-transparent" key={index}>{func}</textarea>
                                ))}
                            </p>
                        }
                    />
                    <div className="relative">
                        <div className="divide-y-2">
                            {problem?.exampleTestcases.map((testcase, index) => (
                                <ExampleCard key={index} title={`ตัวอย่างที่ ${index + 1}`} input={testcase.input as string} output={testcase.output as string} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
