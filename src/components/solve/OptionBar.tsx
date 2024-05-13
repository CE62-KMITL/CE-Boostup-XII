import Button from "../utils/Button";
import BackIcon from "../../assets/back.svg";
import SendIcon from "../../assets/sendIcon.svg";
import Dropdown from "../utils/Dropdown";

function OptionBar() {
    const langList = [["c", "C"], ["c++", "C++"]]

    return (
        <div className="flex row justify-between w-full h-[42px] mb-[14px]">
            <Button text="กลับ" img={BackIcon} className="flex items-center justify-evenly w-[118px] h-full bg-jenna rounded-[8px]" imgClassName="w-[16px] h-[16px]" />
            <div className="row flex justify-between w-[407px]">
                <Button text="คำใบ้" className="w-[90px] h-full bg-jenna rounded-[8px]" />
                <Dropdown type="1" data={langList} />
                <Button imgPosition="right" img={SendIcon} text="ส่ง" className="flex items-center justify-evenly w-[90px] h-full bg-jenna rounded-[8px]" imgClassName="w-[16px] h-[16px]" />
            </div>
        </div>
    );
}

export default OptionBar;