import Button from "../utils/Button";
import Explain from "./ProblemComponents/Explain";
import Playground from "./ProblemComponents/Playground";
import { useState, ReactElement } from "react";
import { ProblemModelResponse } from "../../types/response.type";
import TitleCard from "./ProblemComponents/TitleCard";

type ProblemProps = {
    height: number;
    problem?: ProblemModelResponse;
}

function Problem({ height, problem }: ProblemProps) {
    const clickedStyle = "bg-white w-1/2 h-[60px] rounded-t-[10px] self-end font-bold";
    const unclickedStyle = "bg-primary04 w-1/2 h-[60px] rounded-t-[10px] self-end text-white font-bold";
    const [select, setSelect] = useState<number>(0);

    const components: ReactElement[] = [
        <Explain problem={problem} />,
        <Playground problem={problem} />
    ];

    return (
        <div className="h-full w-[570px] ml-6">
            <div>
                <Button text="โจทย์ปัญหา" className={!select ? clickedStyle : unclickedStyle} ClickFunc={() => setSelect(0)} />
                <Button text="ทดสอบ" className={select ? clickedStyle : unclickedStyle} ClickFunc={() => setSelect(1)} />
            </div>
            <div className="w-full -translate-y-1" style={{ height: `${height - 66 - 55}px` }}>
                <div className="overflow-auto rounded-b-[8px] space-y-3 h-full bg-white flex justify-center">
                    <div className="w-[500px] space-y-[18px] p-3">
                        <TitleCard title={problem?.title as string} difficulty={problem?.difficulty as number} userSolvedCount={problem?.userSolvedCount as number} />
                        {components[select]}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Problem;