import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import Button from "../utils/Button"
import BackIcon from "../../assets/back.svg";

import CodeMirror from '@uiw/react-codemirror';
import { cpp } from "@codemirror/legacy-modes/mode/clike";
import { StreamLanguage } from '@codemirror/language';
import { githubLight } from "@uiw/codemirror-theme-github";
import { useCompilerSettingStore } from "../../store/zustand/compiler-setting.zustand";

type EditorProps = {
    height: number;
    problemId: string | undefined;
    starterCode?: string;
    solutionCode?: string;
}

export default function Editor({ height, starterCode, solutionCode }: EditorProps) {
    const navigate = useNavigate();
    const { code, setCode } = useCompilerSettingStore();
    const [mode, setMode] = useState<"solution" | "starter">("solution");

    useEffect(() => {
        if (mode === "solution")
            setCode(solutionCode);
        else
            setCode(starterCode);
    }, [mode, solutionCode, starterCode]);

    return (
        <div className="flex flex-col w-full h-full overflow-y-hidden">
            <div className="flex place-content-between w-full h-[55px]">
                <Button text="กลับ" img={BackIcon} className="flex items-center justify-evenly w-[96px] h-[40px] bg-jenna rounded-[8px] text-[16px] font-medium" imgClassName="w-[16px] h-[16px]" ClickFunc={() => navigate("/home/1")} />
                <div className="flex gap-[16px] w-[336px] h-[40px]">
                    <Button ClickFunc={() => setMode("solution")} text="Solution Code" className={`${mode === "solution" ? "bg-accent text-stone01 font-bold" : "bg-jenna text-black font-medium"} w-full h-full rounded-[8px]`} />
                    <Button ClickFunc={() => setMode("starter")} text="Starter Code" className={`${mode === "starter" ? "bg-accent text-stone01 font-bold" : "bg-jenna text-black font-medium"} w-full h-full rounded-[8px]`} />
                </div>
            </div>
            <div id="editor-space" className="relative bg-stone01 w-full h-[calc(100%-55px)] rounded-[10px] overflow-y-auto">
                <CodeMirror editable={false} value={code} height={`${height - 55 - 230}px`} extensions={[StreamLanguage.define(cpp)]} theme={githubLight} />
                <div className="flex flex-col place-content-between absolute bottom-0 left-0
                w-full h-[230px] rounded-[10px] p-[16px] bg-jenna opacity-100">
                    <div className="text-[16px] font-medium leading-[1.6rem]">ความคิดเห็น</div>
                    <textarea name="" id=""
                        placeholder="เขียนความคิดเห็น..."
                        className="w-full h-[100px] rounded-[10px] p-[8px_12px] text-[16px] font-medium focus:outline-none"
                        style={{ resize: "none" }}></textarea>
                    <div className="flex justify-end gap-[16px] w-full h-[42px]">
                        <Button text="Reject" className="w-[90px] h-full rounded-[8px] bg-stone01 border-accent border-[1px] text-accent text-[16px] font-medium"></Button>
                        <Button text="Approve" className="w-[120px] h-full rounded-[8px] bg-accent text-stone01 text-[18px] font-bold"></Button>
                    </div>
                </div>
            </div>
        </div>
    )
};