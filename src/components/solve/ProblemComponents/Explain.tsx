import DetailCard from "./DetailCard";
import ExampleCard from "./ExampleCard";
import { ProblemModelResponse } from "../../../types/response.type";

type ExplainProps = {
    problem: ProblemModelResponse | null;
}

export default function Explain({ problem }: ExplainProps) {
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
                <ExampleCard title="ตัวอย่างที่ 1" input="1" output="20" /> 
                {/* TODO: ExampleCard */}
            </div>
        </>
    );
}