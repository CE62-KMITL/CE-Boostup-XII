import { useState } from "react";
import DarkBackground from "../../utils/DarkBackground"
import Input from "../../utils/Input";

function ForgotPasswordPopUp() {
    const [email, setEmail] = useState<string>("")

    return (
        <div className="flex justify-center items-center fixed top-0 w-screen h-screen">
            <DarkBackground />
            <div className="flex flex-col items-center place-content-between absolute z-20
            w-[50%] min-w-[450px] max-w-[500px] h-[50%] min-h-[300px] max-h-[325px] rounded-[30px] p-[36px] bg-stone01">
                <div className="w-full text-[40px] font-[700] text-center leading-[4rem]">
                    ลืมรหัสผ่าน?
                    </div>
                <div className="relative w-full h-[40%] min-h-[40px] max-h-[60px]">
                    <div className="input-container w-full absolute bottom-0">
                    <Input inputClass="identify-username w-full h-[48px] px-[16px] py-[8px] border-[1px] rounded-[8px] bg-stone01 text-stone04 text-[18px] border-stone04" 
                        label="อีเมล" type="email" placeholder=" " 
                        labelClass="absolute left-[16px] bottom-[6px] text-[24px] font-[700] pointer-events-none"
                        func={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="flex flex-col place-content-between w-[35%] h-[20%] min-h-[80px] max-h-[90px]">
                    <button className="flex justify-center items-center w-full h-[50%] min-h-[45px] max-h-[50px] rounded-lg 
                    shadow-md bg-accent text-stone01 text-[18px] font-[700] hover:bg-accent02">
                        ดำเนินการต่อ
                    </button>
                    <div className="flex justify-center items-end w-full h-[45%]">
                        <a href="" className="text-stone04">กลับเข้าสู่ระบบ</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPasswordPopUp;