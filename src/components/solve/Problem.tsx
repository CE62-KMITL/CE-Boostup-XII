import Button from "../utils/Button";
import Explain from "./ProblemComponents/Explain";
import Playground from "./ProblemComponents/Playground";

type ProblemProps = {
    height: number;
}

function Problem({ height }: ProblemProps) {
    const clickedStyle = "bg-white w-1/2 h-[60px] rounded-t-[10px] self-end font-bold";
    const unclickedStyle = "bg-primary04 w-1/2 h-[60px] rounded-t-[10px] self-end text-white font-bold";

    return (
        <div className="h-full w-full py-[33px] ml-6">
            <div>
                <Button text="โจทย์ปัญหา" className={unclickedStyle} />
                <Button text="ทดสอบ" className={clickedStyle} />
            </div>
            <div className="w-full -translate-y-1" style={{ height: `${height - 66 - 52}px` }}>
                <Explain />
            </div>
        </div>
    );
}

export default Problem;