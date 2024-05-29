import EditorFooter from "./EditorFooter";
import OptionBar from "./OptionBar";
import CodeMirror from '@uiw/react-codemirror';
import { c, cpp } from "@codemirror/legacy-modes/mode/clike";
import { useEffect, useState } from "react";
import { StreamLanguage } from '@codemirror/language';
import { githubLight } from "@uiw/codemirror-theme-github";
import { useNavigate } from "react-router-dom";
import { SavesModelResponse } from "../../types/response.type";
import { UseQueryResult, UseMutationResult } from "react-query";
import { UpdateSaveDto, CreateSaveDto } from "../../dto/saves.dto";
import { ErrorModelResponse } from "../../types/response.type";

type EditorProps = {
    height: number;
    problemId: string | undefined;
    savesQuery: UseQueryResult<SavesModelResponse, unknown>;
    updateSaveMutation: UseMutationResult<SavesModelResponse, unknown, { saveId: string; updateSaveRequest: UpdateSaveDto; }, unknown>
    createSaveMutation: UseMutationResult<SavesModelResponse, unknown, CreateSaveDto, unknown>
}

function Editor({ height, problemId, updateSaveMutation, createSaveMutation, savesQuery }: EditorProps) {
    const navigate = useNavigate();

    const [code, setCode] = useState<string>("#include <iostream>");
    const [lang, setLang] = useState<string>("c");

    useEffect(() => {
        if (savesQuery.data) {
            const saveCode = savesQuery.data.code;
            setCode(saveCode.replace(/\\n/g, "\n"));
        }
    }, [savesQuery.data]);

    useEffect(() => {
        if (savesQuery.error && (savesQuery.error as ErrorModelResponse).statusCode === 404)
            handleCreateSave();
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
            await createSaveMutation.mutateAsync({ problem: problemId, code });
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (savesQuery.data)
            handleSave();
    }, [code, savesQuery.data]);

    return (
        <div className="h-full min-w-[779px] w-full">
            <OptionBar setLang={(v) => setLang(v)} />
            <div className={`rounded-[8px] overflow-hidden relative`} style={{ height: `${height - 66 - 55}px` }}>
                <CodeMirror value={code} height={`${height - 66 - 102}px`} extensions={[StreamLanguage.define(lang === "c++" ? cpp : c)]} onChange={(v) => setCode(v)} theme={githubLight} />
                <EditorFooter status={updateSaveMutation.status} handleSave={handleSave} />
            </div>
        </div>
    );
}

export default Editor;