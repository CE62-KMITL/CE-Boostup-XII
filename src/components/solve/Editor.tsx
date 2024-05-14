import EditorFooter from "./EditorFooter";
import OptionBar from "./OptionBar";
import CodeMirror from '@uiw/react-codemirror';
import { cpp } from "@codemirror/legacy-modes/mode/clike";
import { useState, useEffect, useRef } from "react";
import { StreamLanguage } from '@codemirror/language';
import { githubLight } from "@uiw/codemirror-theme-github";

type EditorProps = {
    height: number;
}

function Editor({ height }: EditorProps) {
    const value = "#include <iostream>";
    const [code, setCode] = useState<string>(value);

    return (
        <div className="h-full min-w-[779px] py-[33px]">
            <OptionBar />
            <div className={`rounded-[8px] overflow-hidden relative`} style={{ height: `${height - 66 - 52}px` }}>
                <CodeMirror value={value} height={`${height - 66 - 102}px`} extensions={[StreamLanguage.define(cpp)]} onChange={(v) => setCode(v)} theme={githubLight} />
                <EditorFooter />
            </div>
        </div>
    );
}

export default Editor;