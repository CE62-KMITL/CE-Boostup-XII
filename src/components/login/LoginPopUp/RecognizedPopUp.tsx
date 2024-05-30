import DarkBackground from "../../utils/DarkBackground";

type RecognizedPopUpProps = {
    setIsRecognizedPopUp: React.Dispatch<React.SetStateAction<boolean>>
}

function RecognizedPopUp({setIsRecognizedPopUp}: RecognizedPopUpProps) {
    return (
        <div className="flex justify-center items-center fixed top-0 w-screen h-screen z-10">
            <DarkBackground />
            <div className="flex flex-col items-center place-content-between absolute
            w-[50%] min-w-[450px] max-w-[500px] h-[30%] min-h-[200px] max-h-[225px] rounded-[30px] p-[36px_24px] bg-stone01">
                <div className="w-full text-[40px] font-[700] text-center leading-[3.2rem]">
                    ส่งลิงก์ไปในอีเมลเรียบร้อย
                </div>
                <p className="text-stone04">หากไม่พบ ตรวจสอบได้ในสแปม</p>
                <button className="flex justify-center items-center w-[50%] min-w-[160px] max-w-[170px] h-[30%] min-h-[45px] max-h-[50px]
                rounded-lg shadow-md bg-accent text-stone01 text-[18px] font-[700]" onClick={() => setIsRecognizedPopUp(false)}>
                    รับทราบ
                </button>
            </div>
        </div>
    );
}

export default RecognizedPopUp;