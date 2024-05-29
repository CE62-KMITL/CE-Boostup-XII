import Button from "../utils/Button";
import BackIcon from "../../assets/back.svg";
import SendIcon from "../../assets/sendIcon.svg";
import Dropdown from "../utils/Dropdown";
import { useNavigate } from "react-router-dom";
import { usePopUp } from "../hooks/popUp.hook";
import { useProblemStore } from "../hooks/problem.hook";

type OptionBarProps = {
    setLang: (lang: string) => void;
}

export default function OptionBar({ setLang }: OptionBarProps) {
    const langList = [["c", "C"], ["c++", "C++"]]
    const navigate = useNavigate();
    const { setPopUp, setContent } = usePopUp();
    const { problem } = useProblemStore();

    return (
        <div className="flex row justify-between w-full h-[42px] mb-[14px]">
            <Button text="กลับ" img={BackIcon} className="flex items-center justify-evenly w-[118px] h-full bg-jenna rounded-[8px]" imgClassName="w-[16px] h-[16px]" ClickFunc={() => navigate("/home")} />
            <div className="row flex justify-between w-[407px]">
                <Button ClickFunc={() => { setPopUp(2); setContent(problem?.hint as string) }} text="คำใบ้" className="w-[90px] h-full bg-jenna rounded-[8px]" />
                <Dropdown type={1} values={langList} onChange={(v) => setLang(v)} />
                <Button imgPosition="right" img={SendIcon} text="ส่ง" className="flex items-center justify-evenly w-[90px] h-full bg-jenna rounded-[8px]" imgClassName="w-[16px] h-[16px]" />
            </div>
        </div>
    );
}