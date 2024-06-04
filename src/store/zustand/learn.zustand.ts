import { create } from "zustand";
import { LearnType } from "../../types/learn.type";
import { learnConstant } from "../../constants/learn.constant";

interface LearnSettingState {
    learn: LearnType[];
    setLearn: (learn: LearnType[]) => void;
}

export const useLearnStore = create<LearnSettingState>((set) => ({
    learn: learnConstant,
    setLearn: (learn) => set({ learn })
}));