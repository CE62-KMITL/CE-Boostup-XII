import Button from "../utils/Button";
import SaveIcon from "../../assets/SaveIcon.svg";

type EditorFooterProps = {
    status: "error" | "idle" | "loading" | "success";
    handleSave: () => void;
}

export default function EditorFooter({ status, handleSave }: EditorFooterProps) {
    return (
        <div className="flex justify-between bg-primary04 w-full h-[50px] absolute bottom-0 rounded-b-[8px]">
            <div className="flex items-center ml-[20px] space-x-3">
                <img src={SaveIcon} alt="save-icon" className="h-5"/>
                <p className="text-white text-[14px] font-bold flex items-center">{status === "loading" ? "กำลังบันทึก" : status === "success" ? "บันทึกแล้ว" : "Error"}</p>
            </div>
            <Button text="บันทึก" ClickFunc={handleSave} className="bg-jenna w-[90px] h-full rounded-b-[5px] self-end"/>
        </div>
    );
}