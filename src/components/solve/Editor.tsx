import EditorFooter from "./EditorFooter";
import OptionBar from "./OptionBar";
import CodeMirror from '@uiw/react-codemirror';
import { c, cpp } from "@codemirror/legacy-modes/mode/clike";
import { useEffect, useState } from "react";
import { StreamLanguage } from '@codemirror/language';
import { githubLight } from "@uiw/codemirror-theme-github";
import { useNavigate } from "react-router-dom";
import { savesService } from "../../services/saves.service";
import { useMutation, useQuery } from "react-query";

type EditorProps = {
    height: number;
    problemId: string | undefined;
}

function Editor({ height, problemId }: EditorProps) {
    const navigate = useNavigate();

    const createSaveMutation = useMutation(savesService.createSave, {
        onError: (error) => {
            console.error(error);
        },
    });

    const savesMutation = useMutation(
        () => savesService.updateSave(problemId as string, { code })
        , {
            onError: (error) => {
                console.error(error);
            },
        });

    async function handleSave() {
        if (!problemId)
            return navigate("/home");
        savesMutation.mutate();
    }

    useQuery({
        queryKey: ["save", problemId],
        queryFn: () => savesService.getSave(problemId as string),
        onError: (error) => {
            console.error(error);
            if ((error as any).statusCode === 404)
                handleCreateSave();
        },
        onSuccess: (data) => {
            setCode(data.code);
        }
    });

    function handleCreateSave() {
        if (!problemId)
            return navigate("/home");
        createSaveMutation.mutate({ problemId, code });
    }

    const [code, setCode] = useState<string>("#include <iostream>");
    const [lang, setLang] = useState<string>("c");

    useEffect(() => {
        handleSave();
    }, [code]);

    return (
        <div className="h-full min-w-[779px] w-full">
            <OptionBar setLang={(v) => setLang(v)} />
            <div className={`rounded-[8px] overflow-hidden relative`} style={{ height: `${height - 66 - 55}px` }}>
                <CodeMirror value={code} height={`${height - 66 - 102}px`} extensions={[StreamLanguage.define(lang === "c++" ? cpp : c)]} onChange={(v) => setCode(v)} theme={githubLight} />
                <EditorFooter status={savesMutation.status} handleSave={handleSave} />
            </div>
        </div>
    );
}

export default Editor;