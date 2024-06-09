import { create } from "zustand";
import { ProgrammingLanguage } from "../../enum/compile-and-run.enum";

interface CompilerSettingState {
    language: ProgrammingLanguage;
    code?: string;
    input: string;
    setLanguage: (lang: ProgrammingLanguage) => void;
    setCode: (code: string | undefined) => void;
    setInput: (input: string) => void;
}

export const useCompilerSettingStore = create<CompilerSettingState>((set) => ({
    language: ProgrammingLanguage.C17,
    setLanguage: (lang) => set({ language: lang }),
    code: "",
    setCode: (code) => set({ code }),
    input: "",
    setInput: (input) => set({ input })
}));