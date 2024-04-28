import DarkBackground from "../utils/DarkBackground"

function RecognizedPopUp() {
    return (
        <div className="flex justify-center items-center fixed top-0 w-screen h-screen z-10">
            <DarkBackground />
            <div className="flex flex-col items-center place-content-between absolute
            w-[50%] min-w-[520px] max-w-[560px] h-[36%] min-h-[200px] max-h-[280px] rounded-[2rem] p-[2rem] bg-stone01">

                <div className="w-full text-stone05 text-[40px] font-[700] text-center leading-[3rem]">
                    ส่งลิงก์ไปในอีเมลเรียบร้อย
                </div>

                <p className="">หากไม่พบ ตรวจสอบได้ในสแปม</p>

                <button className="flex justify-center items-center w-full min-w-[150px] max-w-[160px] h-[20%] min-h-[50px] max-h-[60px]
                rounded-lg m-[1rem] shadow-md
                bg-accent text-stone01 text-[18px] font-[700]">
                     รับทราบ
                </button>

            </div>
        </div>
    );
}

export default RecognizedPopUp;