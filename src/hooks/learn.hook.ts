import { learnConstant } from "../constants/learn.constant";
import { useLearnStore } from "../store/zustand/learn.zustand";

export const useLearn = () => {
    const { learn, setLearn } = useLearnStore();

    const searchLearn = (title: string) => {
        console.log(title);
        if (title === "")
            setLearn(learnConstant);
        else
            setLearn(learnConstant.filter((lesson) => lesson.title.toLowerCase().includes(title.toLowerCase())));
    }

    return {
        learn,
        searchLearn
    };
};