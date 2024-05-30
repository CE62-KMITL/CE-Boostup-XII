import EditorFooter from "./EditorFooter";
import OptionBar from "./OptionBar";
import CodeMirror from '@uiw/react-codemirror';
import { c, cpp } from "@codemirror/legacy-modes/mode/clike";
import { useEffect } from "react";
import { StreamLanguage } from '@codemirror/language';
import { githubLight } from "@uiw/codemirror-theme-github";
import { useNavigate } from "react-router-dom";
import { SavesModelResponse } from "../../types/response.type";
import { UseQueryResult, UseMutationResult } from "react-query";
import { UpdateSaveDto, CreateSaveDto } from "../../dto/saves.dto";
import { ErrorModelResponse } from "../../types/response.type";
import { ProgrammingLanguage } from "../../enum/compile-and-run.enum";
import { useCompilerSettingStore } from "../../store/zustand/compiler-setting.zustand";

type EditorProps = {
    height: number;
    problemId: string | undefined;
    savesQuery: UseQueryResult<SavesModelResponse, unknown>;
    updateSaveMutation: UseMutationResult<SavesModelResponse, unknown, { saveId: string; updateSaveRequest: UpdateSaveDto; }, unknown>
    createSaveMutation: UseMutationResult<SavesModelResponse, unknown, CreateSaveDto, unknown>
    starterCode: string;
}

function Editor({ height, problemId, updateSaveMutation, createSaveMutation, savesQuery, starterCode }: EditorProps) {
    const navigate = useNavigate();
    const { language, code, setCode } = useCompilerSettingStore();

    useEffect(() => {
        if (savesQuery.error && (savesQuery.error as ErrorModelResponse).statusCode === 404) {
            handleCreateSave();
            return navigate(0);
        }
    }, [savesQuery.error]);

    async function handleSave() {
        try {
            if (!problemId)
                return navigate("/home");
            if (savesQuery.data)
                await updateSaveMutation.mutateAsync({ saveId: savesQuery.data.id, updateSaveRequest: { code: code.replace(/\n/g, "\\n") } });
        } catch (error) {
            console.error(error);
        }
    }

    async function handleCreateSave() {
        try {
            if (!problemId)
                return navigate("/home");
            const response = await createSaveMutation.mutateAsync({ problem: problemId, code: starterCode });
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    async function handleChange(v: string) {
        try {
            if (!problemId)
                return navigate("/home");
            if (savesQuery.data)
                await updateSaveMutation.mutateAsync({ saveId: savesQuery.data.id, updateSaveRequest: { code: v.replace(/\n/g, "\\n") } });
            setCode(v);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="h-full min-w-[779px] w-full">
            <OptionBar />
            <div className={`rounded-[8px] overflow-hidden relative`} style={{ height: `${height - 66 - 55}px` }}>
                <CodeMirror value={code} height={`${height - 66 - 102}px`} extensions={[StreamLanguage.define(language === ProgrammingLanguage.CPP17 ? cpp : c)]} onChange={handleChange} theme={githubLight} />
                <EditorFooter status={updateSaveMutation.status} handleSave={handleSave} />
            </div>
        </div>
    );
}

export default Editor;