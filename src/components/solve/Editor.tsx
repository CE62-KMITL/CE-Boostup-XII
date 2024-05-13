import EditorFooter from "./EditorFooter";
import OptionBar from "./OptionBar";
import CodeMirror from '@uiw/react-codemirror';
import { cpp } from "@codemirror/legacy-modes/mode/clike";
import { useState, useEffect, useRef } from "react";
import { StreamLanguage } from '@codemirror/language';
import { githubLight } from "@uiw/codemirror-theme-github";

function Editor() {
    const value = "#include <iostream>";
    const [code, setCode] = useState<string>(value);
    const boxRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number>(0);
    // cpp().extension

    useEffect(() => {
        const event = addEventListener('resize', () => {
            setHeight(boxRef.current?.clientHeight || 0);
        });
        return () => removeEventListener('resize', () => event);
    }, [boxRef.current]);

    useEffect(() => {
        setHeight(boxRef.current?.clientHeight || 0);
    }, [boxRef.current]);

    return (
        <div className="h-full w-[779px] py-[33px]" ref={boxRef}>
            <OptionBar />
            <div className={`rounded-[8px] overflow-hidden relative`} style={{ height: `${height - 66 - 52}px` }}>
                <CodeMirror value={value} height={`${height - 66 - 102}px`} extensions={[StreamLanguage.define(cpp)]} onChange={(v) => setCode(v)} theme={githubLight} />
                <EditorFooter />
            </div>
        </div>
    );
}

export default Editor;