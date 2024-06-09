import Button from "../utils/Button";
import BackIcon from "../../assets/back.svg";
import SendIcon from "../../assets/sendIcon.svg";
import Dropdown from "../utils/Dropdown";
import { useNavigate } from "react-router-dom";
import { usePopUp } from "../../hooks/pop-up.hook";
import { useProblemStore } from "../../store/zustand/problem.zustand";
import { ProgrammingLanguage } from "../../enum/compile-and-run.enum";
import { useCompilerSettingStore } from "../../store/zustand/compiler-setting.zustand";
import { useSubmission } from "../../hooks/submission.hook";
import { DropdownType } from "../../types/dropdown.type";

export default function OptionBar() {
    const navigate = useNavigate();
    const { createSubmissionMutation } = useSubmission();
    const { setLanguage, code, language } = useCompilerSettingStore();

    const { setPopUp, setContent } = usePopUp();
    const { problem } = useProblemStore();

    const langList: DropdownType[] = [
        { value: ProgrammingLanguage.C17, name: "C" },
        { value: ProgrammingLanguage.CPP17, name: "C++" }
    ]

    async function handleSubmit() {
        try {
            if (code)
                await createSubmissionMutation.mutateAsync({
                    code,
                    language: language,
                    problem: problem?.id as string
                }, {
                    onSuccess: (response) => {
                        if (response.accepted)
                            setPopUp(1);
                        else {
                            const content = response.outputCodes?.map((output, index) => {
                                return `Testcase ${index + 1}: ${output}`;
                            });
                            setContent(content.join("\n"));
                            setPopUp(3);
                        }
                    }
                });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex row justify-between w-full h-[42px] mb-[14px]">
            <Button text="กลับ" img={BackIcon} className="flex items-center justify-evenly w-[118px] h-full bg-jenna rounded-[8px] text-[16px] font-medium" imgClassName="w-[16px] h-[16px]" ClickFunc={() => navigate(-1)} />
            <div className="row flex justify-between w-[320px]">
                <Button ClickFunc={() => { setPopUp(2); setContent(problem?.hint as string) }} text="คำใบ้" className="w-[90px] h-full bg-jenna rounded-[8px] text-[16px] font-medium" />
                <Dropdown type={1} values={langList} onChange={(v) => setLanguage(v as ProgrammingLanguage)} />
                <Button ClickFunc={handleSubmit} imgPosition="right" img={SendIcon} text="ส่ง" className="flex items-center justify-evenly w-[90px] h-full bg-jenna rounded-[8px] text-[16px] font-medium" imgClassName="w-[16px] h-[16px]" />
            </div>
        </div>
    );
}