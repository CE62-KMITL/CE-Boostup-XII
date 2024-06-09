import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import Button from "../utils/Button"
import BackIcon from "../../assets/back.svg";

import CodeMirror from '@uiw/react-codemirror';
import { c, cpp } from "@codemirror/legacy-modes/mode/clike";
import { StreamLanguage } from '@codemirror/language';
import { githubLight } from "@uiw/codemirror-theme-github";
import { SavesModelResponse } from "../../types/response.type";
import { UseQueryResult, UseMutationResult } from "react-query";
import { UpdateSaveDto, CreateSaveDto } from "../../dto/saves.dto";
import { ErrorModelResponse } from "../../types/response.type";
import { ProgrammingLanguage } from "../../enum/compile-and-run.enum";
import { useCompilerSettingStore } from "../../store/zustand/compiler-setting.zustand";
import { usePopUp } from "../../hooks/pop-up.hook";

type EditorProps = {
    height: number;
    problemId: string | undefined;
    savesQuery: UseQueryResult<SavesModelResponse, unknown>;

    // not sure this is correct or nessesary
    updateSaveMutation: UseMutationResult<SavesModelResponse, unknown, { saveId: string; updateSaveRequest: UpdateSaveDto; }, unknown>
    
    createSaveMutation: UseMutationResult<SavesModelResponse, unknown, CreateSaveDto, unknown>
    starterCode: string;
}

export default function EditorZone ({ height, problemId, createSaveMutation, savesQuery, starterCode }: EditorProps) {
    const navigate = useNavigate();
    const { language, code, setCode } = useCompilerSettingStore();
    const { setPopUp } = usePopUp();

    useEffect(() => {
        if (savesQuery.error && (savesQuery.error as ErrorModelResponse).statusCode === 404) {
            handleCreateSave();
            return navigate(0);
        }
    }, [savesQuery.error]);

    // async function handleSave() {
    //     try {
    //         if (!problemId)
    //             return navigate("/home");
    //         if (savesQuery.data)
    //             await updateSaveMutation.mutateAsync({ saveId: savesQuery.data.id, updateSaveRequest: { code: code.replace(/\n/g, "\\n") } });
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    async function handleCreateSave() {
        try {
            if (!problemId)
                return navigate("/home");
            await createSaveMutation.mutateAsync({ problem: problemId, code: starterCode });
        } catch (error) {
            console.error(error);
        }
    }

    async function handleChange(v: string) {
        try {
            if (!problemId)
                return navigate("/home");
            // if (savesQuery.data)
            //     await updateSaveMutation.mutateAsync({ saveId: savesQuery.data.id, updateSaveRequest: { code: v.replace(/\n/g, "\\n") } });
            setCode(v);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="flex flex-col
        w-[60%] lg:w-[595px] xl:w-[680px] 2xl:w-[780px] h-full">
            <div className="flex place-content-between w-full h-[60px]">
                <Button text="กลับ" img={BackIcon} className="flex items-center justify-evenly w-[96px] h-[40px] bg-jenna rounded-[8px] text-[16px] font-medium" imgClassName="w-[16px] h-[16px]" ClickFunc={() => navigate("/home/1")} />
                <div className="
                flex gap-[16px] w-[336px] h-[40px]">
                    <Button text="Solution code" className="bg-jenna w-full h-full rounded-[8px] text-[16px] font-medium"/>
                    <Button text="Starter Code" className="bg-accent w-full h-full rounded-[8px] text-stone01 text-[18px] font-bold"/>
                </div>
            </div>

            <div id="editor-space" className="relative bg-stone01 w-full h-[calc(100%-60px)] rounded-[10px] p-[16px] overflow-hidden">
                <CodeMirror value={code} height={`${height - 60 - 230 - 16}px`} extensions={[StreamLanguage.define(language === ProgrammingLanguage.CPP17 ? cpp : c)]} onChange={handleChange} theme={githubLight} />
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