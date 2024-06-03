import { learnConstant } from "../constants/learn.constant";
import { useLearnStore } from "../store/zustand/learn.zustand";

export const useLearn = () => {
    const { learn, setLearn } = useLearnStore();

    const searchLearn = (title: string) => {
        if (title === "")
            setLearn(learnConstant);
        else
            setLearn(learn.filter((lesson) => lesson.title.toLowerCase().includes(title.toLowerCase())));
    }

    return {
        learn,
        searchLearn
    };
};