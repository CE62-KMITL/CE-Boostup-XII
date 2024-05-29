import TitleCard from "./TitleCard";
import ExampleCard from "./ExampleCard";
import Button from "../../utils/Button";
import RunIcon from "../../../assets/RunIcon.svg";
import { ProblemModelResponse } from "../../../types/response.type";

type PlaygroundProps = {
    problem?: ProblemModelResponse | null;
}

export default function Playground({ problem }: PlaygroundProps) {
    return (
        <>
            <div className="flex items-center justify-between px-3">
                <h3 className="text-lg font-bold">สร้าง Testcase ด้วยตัวเอง</h3>
                <Button text="Run" className="bg-jenna rounded-[8px] h-[42px] w-[118px] flex justify-evenly items-center" ClickFunc={() => console.log("Run")} img={RunIcon} imgPosition="right" />
            </div>
            <div className="divide-y-2 px-3">
                <ExampleCard inputMode={true} title="1) Testcase" input={problem?.testcases[0].input as string} output={problem?.testcases[0].output as string} />
            </div>
        </>
    );
}