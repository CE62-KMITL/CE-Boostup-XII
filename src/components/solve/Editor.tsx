import EditorFooter from "./EditorFooter";
import OptionBar from "./OptionBar";
import CodeMirror from '@uiw/react-codemirror';
import { c, cpp } from "@codemirror/legacy-modes/mode/clike";
import { useState, useEffect, useRef } from "react";
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
    updateSaveMutation: UseMutationResult<SavesModelResponse, unknown, { saveId: string; updateSaveRequest: UpdateSaveDto; }, unknown>;
    createSaveMutation: UseMutationResult<SavesModelResponse, unknown, CreateSaveDto, unknown>;
    starterCode: string;
};

function Editor({ height, problemId, updateSaveMutation, createSaveMutation, savesQuery, starterCode }: EditorProps) {
    const navigate = useNavigate();
    const { language, code, setCode } = useCompilerSettingStore();
    const editorHeightRef = useRef<HTMLDivElement>(null);
    const [editorHeight, setEditorHeight] = useState<number>(height);

    useEffect(() => {
        const updateEditorHeight = () => {
            if (editorHeightRef.current) {
                setEditorHeight(editorHeightRef.current.clientHeight);
            }
        };
        updateEditorHeight();

        window.addEventListener('resize', updateEditorHeight);
        return () => {
            window.removeEventListener('resize', updateEditorHeight);
        };
    }, [height]);

    useEffect(() => {
        if (savesQuery.error && (savesQuery.error as ErrorModelResponse).statusCode === 404) {
            handleCreateSave();
            navigate(0);
        }
    }, [savesQuery.error, navigate]);

    async function handleSave() {
        try {
            if (!problemId) return navigate("/home");
            if (savesQuery.data && code) {
                await updateSaveMutation.mutateAsync({
                    saveId: savesQuery.data.id,
                    updateSaveRequest: { code: code }
                });
            }
        } catch (error) {
            console.error(error);
        }
    }

    async function handleCreateSave() {
        try {
            if (!problemId) return navigate("/home");
            await createSaveMutation.mutateAsync({ problem: problemId, code: starterCode });
        } catch (error) {
            console.error(error);
        }
    }

    async function handleChange(v: string) {
        try {
            if (!problemId) return navigate("/home");
            if (savesQuery.data) {
                setCode(v);
                await updateSaveMutation.mutateAsync({
                    saveId: savesQuery.data.id,
                    updateSaveRequest: { code: v }
                });
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="h-full min-w-[780px] w-full">
            <OptionBar />
            <div
                ref={editorHeightRef}
                id="editor-height"
                className="relative rounded-[10px] bg-stone01 overflow-hidden"
                style={{ height: `${height - 66 - 55}px` }}
            >
                <CodeMirror
                    value={code}
                    height={`${editorHeight - 50}px`}
                    extensions={[StreamLanguage.define(language === ProgrammingLanguage.CPP17 ? cpp : c)]}
                    onChange={handleChange}
                    theme={githubLight}
                    onStatistics={(statistics) => {
                        console.log(statistics);
                    }}
                />
                <EditorFooter status={updateSaveMutation.status} handleSave={handleSave} />
            </div>
        </div>
    );
}

export default Editor;