import { create } from "zustand";
import { TestcaseType } from "../../types/testcase.type";

interface CreateProblemState {
    selectedTags: string[];
    testcases: TestcaseType[];
    hiddenTestcases: TestcaseType[];
    file: File | null;
    setSelectedTags: (tags: string[]) => void;
    setTestcases: (testcases: TestcaseType[]) => void;
    setHiddenTestcases: (hiddenTestcases: TestcaseType[]) => void;
    setFile: (file: File | null) => void;
}

export const useCreateProblemStore = create<CreateProblemState>((set) => ({
    selectedTags: [],
    setSelectedTags: (tags: string[]) => set({ selectedTags: tags }),
    testcases: Array(4).fill({ input: "", output: "" }),
    hiddenTestcases: Array(6).fill({ input: "", output: "" }),
    setTestcases: (testcases: TestcaseType[]) => set({ testcases: testcases }),
    setHiddenTestcases: (hiddenTestcases: TestcaseType[]) => set({ hiddenTestcases: hiddenTestcases }),
    file: null,
    setFile: (file: File | null) => set({ file: file }),
}));