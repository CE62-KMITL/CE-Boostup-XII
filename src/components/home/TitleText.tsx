function TitleText({ username }: { username: string }) {
    return (
        <div className="mb-9">
            <h2 className="text-stone01 text-[40px] font-[700]">
                วันนี้{username} 
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
