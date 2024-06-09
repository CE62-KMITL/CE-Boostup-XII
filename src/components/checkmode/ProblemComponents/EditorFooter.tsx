import Button from "../../utils/Button"
import { useUser } from "../../../hooks/user.hook";

export default function EditorFooter() {
    const { isOwner } = useUser();

    if (isOwner) return (
        <div className="flex justify-end gap-[16px] w-full h-[42px] pr-3 absolute bottom-3">
            <Button text="Reject" className="w-[90px] h-full rounded-[8px] bg-stone01 border-accent border-[1px] text-accent text-[16px] font-medium"></Button>
            <Button text="Approve" className="w-[120px] h-full rounded-[8px] bg-accent text-stone01 text-[18px] font-bold"></Button>
        </div>
    )

    return (
        <div className="flex flex-col place-content-between absolute bottom-0 left-0
                w-full h-[230px] rounded-[10px] p-[16px] bg-jenna opacity-100">
            <div className="text-[16px] font-medium leading-[1.6rem]">ความคิดเห็น</div>
            <textarea
                placeholder="เขียนความคิดเห็น..."
                className="w-full h-[100px] rounded-[10px] p-[8px_12px] text-[16px] font-medium focus:outline-none"
                style={{ resize: "none" }}>
            </textarea>
            <div className="flex justify-end gap-[16px] w-full h-[42px]">
                <Button text="Reject" className="w-[90px] h-full rounded-[8px] bg-stone01 border-accent border-[1px] text-accent text-[16px] font-medium"></Button>
                <Button text="Approve" className="w-[120px] h-full rounded-[8px] bg-accent text-stone01 text-[18px] font-bold"></Button>
            </div>
        </div>
    )
}