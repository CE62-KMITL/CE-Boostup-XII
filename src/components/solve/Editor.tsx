import EditorFooter from "./EditorFooter";
import OptionBar from "./OptionBar";
import CodeMirror from '@uiw/react-codemirror';
import { c, cpp } from "@codemirror/legacy-modes/mode/clike";
import { useEffect, useState } from "react";
import { StreamLanguage } from '@codemirror/language';
import { githubLight } from "@uiw/codemirror-theme-github";
import { useNavigate } from "react-router-dom";
import { savesService } from "../../services/saves.service";

type EditorProps = {
    height: number;
    problemId: string | undefined;
}

function Editor({ height, problemId }: EditorProps) {
    const navigate = useNavigate();

    async function handleSave() {
        try {
            if (!problemId)
                return navigate("/home");
            await savesService.updateSave(problemId, { code });
        } catch (error) {
            console.error(error);
        }
    }

    async function getSave() {
        try {
            if (!problemId)
                return navigate("/home");
            const { code } = await savesService.getSave(problemId);
            setCode(code);
        } catch (error) {
            console.error(error);
            if ((error as any).statusCode === 404)
                await createSave();
        }
    }

    async function createSave() {
        try {
            if (!problemId)
                return navigate("/home");
            await savesService.createSave({ code, problemId });
        } catch (error) {
            console.error(error);
        }
    }

    const [code, setCode] = useState<string>("#include <iostream>");
    const [lang, setLang] = useState<string>("c");

    useEffect(() => {
        handleSave();
    }, [code]);

    useEffect(() => {
        getSave();
    }, []);

    return (
        <div className="h-full min-w-[779px] w-full">
            <OptionBar setLang={(v) => setLang(v)} />
            <div className={`rounded-[8px] overflow-hidden relative`} style={{ height: `${height - 66 - 55}px` }}>
                <CodeMirror value={code} height={`${height - 66 - 102}px`} extensions={[StreamLanguage.define(lang === "c++" ? cpp : c)]} onChange={(v) => setCode(v)} theme={githubLight} />
                <EditorFooter />
            </div>
        </div>
    );
}

export default Editor;