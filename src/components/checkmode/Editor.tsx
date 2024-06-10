import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import Button from "../utils/Button"
import BackIcon from "../../assets/back.svg";

import CodeMirror from '@uiw/react-codemirror';
import { cpp } from "@codemirror/legacy-modes/mode/clike";
import { StreamLanguage } from '@codemirror/language';
import { githubLight } from "@uiw/codemirror-theme-github";
import { useCompilerSettingStore } from "../../store/zustand/compiler-setting.zustand";
import { useProblemStore } from "../../store/zustand/problem.zustand";
import EditorFooter from "./ProblemComponents/EditorFooter";

type EditorProps = {
    height: number;
}

export default function Editor({ height }: EditorProps) {
    const navigate = useNavigate();
    const { code, setCode } = useCompilerSettingStore();
    const [mode, setMode] = useState<"solution" | "starter">("solution");
    const { problem } = useProblemStore();

    useEffect(() => {
        if (mode === "solution")
            setCode(problem?.solution);
        else
            setCode(problem?.starterCode);
    }, [mode, problem]);

    return (
        <div className="flex flex-col w-full h-full overflow-y-hidden">
            <div className="flex place-content-between w-full h-[55px]">
                <Button text="กลับ" img={BackIcon} className="flex items-center justify-evenly w-[96px] h-[40px] bg-jenna rounded-[8px] text-[16px] font-medium" imgClassName="w-[16px] h-[16px]" ClickFunc={() => navigate(-1)} />
                <div className="flex gap-[16px] w-[336px] h-[40px]">
                    <Button ClickFunc={() => setMode("solution")} text="Solution Code" className={`${mode === "solution" ? "bg-accent text-stone01 font-bold" : "bg-jenna text-black font-medium"} w-full h-full rounded-[8px]`} />
                    <Button ClickFunc={() => setMode("starter")} text="Starter Code" className={`${mode === "starter" ? "bg-accent text-stone01 font-bold" : "bg-jenna text-black font-medium"} w-full h-full rounded-[8px]`} />
                </div>
            </div>
            <div id="editor-space" className="relative bg-stone01 w-full h-[calc(100%-55px)] rounded-[10px] overflow-y-auto">
                <CodeMirror editable={false} value={code} height={`${height - 55 - 230}px`} extensions={[StreamLanguage.define(cpp)]} theme={githubLight} />
                <EditorFooter />
            </div>
        </div>
    )
};