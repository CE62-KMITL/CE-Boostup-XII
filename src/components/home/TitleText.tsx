import { useUser } from "../../hooks/user.hook";

function TitleText() {
    const user = useUser().user;

    return (
        <div className="mb-9">
            <h2 className="text-stone01 text-[40px] font-[700]">
                วันนี้น้อง{user?.displayName} 
                <p className="text-accent text-[40px] font-[700] inline">
                    ทำโจทย์
                </p> 
                แล้วหรือยัง ?
            </h2>
            <p className="text-stone02 text-[24px] font-[700]">
                ฝึกทำโจทย์เพิ่มทักษะ และสะสมคะแนนเพื่อลุ้นรับของรางวัล
            </p>
        </div>
    );
}

export default TitleText;
