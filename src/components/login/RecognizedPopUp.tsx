import DarkBackground from "../utils/DarkBackground"

function RecognizedPopUp() {
    return (
        <>
            <DarkBackground />
            <div className="bg-slate-100 w-[500px] h-[258px] 
            px-[25px] py-[33px] rounded-[30px] centre-absolute">
                <div className="w-full h-full relative">
                    <div className="text-stone05 text-[40px] font-[700] text-center">
                        ส่งลิงก์ไปในอีเมลเรียบร้อย
                    </div>
                    <div className="centre-absolute">
                        <p>หากไม่พบ ตรวจสอบได้ในสแปม</p>
                    </div>
                    <button className="bg-accent text-stone01 text-[18px] font-[700] 
                    w-[161px] h-[46px] rounded-[8px] absolute bottom-0 left-[50%] translate-x-[-50%]
                    flex justify-center items-center">รับทราบ</button>     
                </div>
            </div>
        </>
    );
}

export default RecognizedPopUp;