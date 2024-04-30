import DarkBackground from "../utils/DarkBackground"

function ForgotPasswordPopUp() {
    return (
        <div className="flex justify-center items-center fixed top-0 w-screen h-screen z-10">
            <DarkBackground />
            <div className="flex flex-col items-center place-content-between absolute
            w-[50%] min-w-[480px] max-w-[510px] h-[36%] min-h-[300px] max-h-[320px] rounded-[2rem] p-[2rem] bg-stone01">
                <div className="flex flex-col items-center place-content-between w-full h-[50%]">
                    <div className="w-full text-stone05 text-[40px] font-[700] text-center leading-[3rem]">
                        ลืมรหัสผ่าน?
                    </div>
                    <div className="relative w-[95%] h-[20%] min-h-[90px] max-h-[100px]">
                        <div className="input-container w-full absolute bottom-0">
                            <input type="text" name="" id=""
                            className="w-full px-[16px] py-[8px] border-stone03 border-[1px] rounded-[8px] 
                            text-stone04 text-[16px]" placeholder=" "/>
                            <label htmlFor="" className="absolute left-[16px] bottom-[6px] 
                            text-stone04 text-[18px] font-[700]">อีเมล</label>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col place-content-between w-[36%] h-[20%] min-h-[80px] max-h-[90px]">
                    <button className="flex justify-center items-center w-full h-[55%] rounded-lg 
                    shadow-md bg-accent text-stone01 text-[18px] font-[700]">
                        ดำเนินการต่อ
                    </button>
                    <div className="flex justify-center items-end w-full h-[45%]">
                        <a href="" className="text-stone04 text-[16px]">กลับเข้าสู่ระบบ</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPasswordPopUp;