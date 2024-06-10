import InputPlain from "../utils/InputPlain";
import { useCreateProblemStore } from "../../store/zustand/create-problem.zustand";

type TestcaseInputProps = {
    index: number;
    type: "testcases" | "hiddenTestcases";
}

export default function TestcaseInput({ index, type }: TestcaseInputProps) {
    const { testcases, setTestcases, hiddenTestcases, setHiddenTestcases } = useCreateProblemStore();

    return (
        <div className="flex">
            <InputPlain
                label={`ตัวอย่างที่ ${index} *`}
                subtext="Input :"
                type="textarea"
                placeholder=" "
                required={true}
                inputClass="w-[15vw] h-[76px] mr-[14px] px-[16px] border-stone03 border-[1px] rounded-[10px] text-stone04 text-[18px]"
                labelClass="text-stone04 text-[20px] font-[700] mt-4"
                pClass="mb-2 text-stone05"
                func={(e) => {
                    if (type === "testcases") {
                        const newTestcases = [...testcases];
                        newTestcases[index - 1] = { input: e.target.value, output: newTestcases[index - 1]?.output || "" };
                        setTestcases(newTestcases);
                    } else {
                        const newHiddenTestcases = [...hiddenTestcases];
                        newHiddenTestcases[index - 1] = { input: e.target.value, output: newHiddenTestcases[index - 1]?.output || "" };
                        setHiddenTestcases(newHiddenTestcases);
                    }
                }
                }
            />
            <InputPlain
                label=""
                subtext="Output :"
                type="textarea"
                placeholder=" "
                required={true}
                inputClass="w-[15vw] h-[76px] ml-[14px]  px-[16px] border-stone03 border-[1px] rounded-[10px] text-stone04 text-[18px]"
                labelClass="text-stone04 text-[20px] font-[700] mt-[46px]"
                pClass="ml-[14px]  mb-2 text-stone05"
                func={(e) => {
                    if (type === "testcases") {
                        const newTestcases = [...testcases];
                        newTestcases[index - 1] = { input: newTestcases[index - 1]?.input || "", output: e.target.value };
                        setTestcases(newTestcases);
                    } else {
                        const newHiddenTestcases = [...hiddenTestcases];
                        newHiddenTestcases[index - 1] = { input: newHiddenTestcases[index - 1]?.input || "", output: e.target.value };
                        setHiddenTestcases(newHiddenTestcases);
                    }
                }
                }
            />
        </div>
    )
}