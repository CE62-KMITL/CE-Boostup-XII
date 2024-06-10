import ExampleCard from "./ExampleCard";
import Button from "../../utils/Button";
import RunIcon from "../../../assets/RunIcon.svg";
import { ProblemModelResponse } from "../../../types/response.type";
import { useCompileAndRun } from "../../../hooks/compile-and-run.hook";
import { useCompilerSettingStore } from "../../../store/zustand/compiler-setting.zustand";
import { useState } from "react";
import { usePopUp } from "../../../hooks/pop-up.hook";
import InfoIcon from "../../../assets/InfoIcon.svg";

type PlaygroundProps = {
    problem?: ProblemModelResponse | null;
}

export default function Playground({ problem }: PlaygroundProps) {
    const { compileAndRunMutation } = useCompileAndRun();
    const { language, code, input } = useCompilerSettingStore();
    const [output, setOutput] = useState<string>(problem?.exampleTestcases[0].output as string);
    const { setPopUp } = usePopUp();
    
    const formattedText = (text?: string) => {
        return text?.split(/\\n/g).join('<br />');
    }

    async function handleCompileAndRun() {
        try {
            if (!problem || !code )
                return;
            setOutput("Loading...")
            await compileAndRunMutation.mutateAsync({
                language,
                code,
                optimizationLevel: problem?.optimizationLevel,
                inputs: [input.replace(/\n/g, "\\n")],
                allowedHeaders: problem?.allowedHeaders,
                bannedFunctions: problem?.bannedFunctions,
                timeLimit: problem?.timeLimit,
                formattedDiagnostic: false
            }, {
                onSuccess: (response) => {
                    setOutput(response.outputs[0].runtimeOutput === "" ? "null" : response.outputs[0].runtimeOutput);
                },
                onError: (error) => {
                    console.error(error);
                    setOutput(`Error: ${(error as any).message}`)
                }
            });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <div className="flex items-center justify-between px-3">
                <h3 className="text-lg font-bold">สร้าง Testcase ด้วยตัวเอง</h3>
                <Button text="Run" className="bg-jenna rounded-[8px] h-[42px] w-[118px] flex justify-evenly items-center" ClickFunc={handleCompileAndRun} img={RunIcon} imgPosition="right" />
                <img src={InfoIcon} alt="info" className="w-[20px] h-[20px] absolute top-[179px] left-[235px] hover:cursor-pointer" onClick={() => setPopUp(4)} />
            </div>
            <div className="divide-y-2 px-3">
                <ExampleCard inputMode={true} title="1) Testcase" input={formattedText(problem?.exampleTestcases[0].input) as string} output={formattedText(output) as string} />
            </div>
        </>
    );
}