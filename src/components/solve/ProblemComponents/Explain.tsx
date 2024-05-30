import DetailCard from "./DetailCard";
import ExampleCard from "./ExampleCard";
import { ProblemModelResponse } from "../../../types/response.type";
import InfoIcon from "../../../assets/InfoIcon.svg";
import { usePopUp } from "../../hooks/pop-up.hook";

type ExplainProps = {
    problem?: ProblemModelResponse | null;
}

export default function Explain({ problem }: ExplainProps) {
    const { setPopUp } = usePopUp();

    return (
        <>
            <div className="bg-jenna w-full flex flex-col items-center rounded-xl p-3">
                <h3 className="text-lg font-bold">คำอธิบายโจทย์</h3>
                <p className="underline font-semibold">เรื่องเล่าจากโจทย์</p>
                <p className="font-medium">
                    {problem?.description}
                </p>
                <p className="self-end font-light text-[14px]">โดย พี่{problem?.owner.displayName}</p>
            </div>
            <div className="divide-y-2 px-3">
                <DetailCard title="รูปแบบ input" content={<p>{problem?.input}</p>} />
                <DetailCard title="รูปแบบ output" content={<p>{problem?.output}</p>} />
                <DetailCard title="ข้อจำกัด" content={<p>{
                    problem?.bannedFunctions.map((func, index) => (
                        <span key={index}>{func}</span>
                    ))
                }</p>} />
                <div className="relative">
                    <img src={InfoIcon} alt="info" className="w-[20px] h-[20px] absolute top-[15px] left-[96px] hover:cursor-pointer" onClick={() => setPopUp(1)} />
                    <div className="divide-y-2">
                        {problem?.testcases.map((testcase, index) => {
                            return <ExampleCard key={index} title={`ตัวอย่างที่ ${index + 1}`} input={testcase.input} output={testcase.output} />
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}