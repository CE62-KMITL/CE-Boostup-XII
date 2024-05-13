import Button from "../utils/Button";

export default function EditorFooter() {
    return (
        <div className="flex justify-between bg-primary04 w-full h-[50px] absolute bottom-0 rounded-[8px]">
            <p className="text-white text-[14px] font-bold flex items-center pl-[20px]">กำลังบันทึก</p>
            <Button text="บันทึก" className="bg-jenna w-[90px] h-full rounded-[5px] self-end"/>
        </div>
    );
}