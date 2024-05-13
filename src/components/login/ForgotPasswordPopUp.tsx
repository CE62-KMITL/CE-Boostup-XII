import DarkBackground from "../utils/DarkBackground"
import Input from "../utils/Input";
import { useState } from "react";
import axios from "axios";

type ForgotPasswordPopUpProps = {
    setShowForgotPassword: React.Dispatch<React.SetStateAction<boolean>>
    setIsRecognizedPopUp: React.Dispatch<React.SetStateAction<boolean>>
}

function ForgotPasswordPopUp({ setShowForgotPassword, setIsRecognizedPopUp }: ForgotPasswordPopUpProps) {
    const [email, setEmail] = useState<string>("");
    async function handleSubmit() {
        // try {
        //     const res = await axios.post(`${import.meta.env.VITE_HOST_API}/auth/request-password-reset`, { email: email, siteUrl: window.location.origin });
        //     console.log(res);
        // } catch (error) {
        //     console.log(error);
        // }
        setIsRecognizedPopUp(true);
        setShowForgotPassword(false);
    }

    return (
        <div className="flex justify-center items-center fixed left-0 top-0 w-screen h-screen z-10">
            <DarkBackground />
            <div className="flex flex-col items-center place-content-between absolute
            w-[50%] min-w-[450px] max-w-[500px] h-[50%] min-h-[300px] max-h-[325px] rounded-[30px] p-[36px] bg-stone01">
                <div className="w-full text-[40px] font-[700] text-center leading-[4rem]">
                    ลืมรหัสผ่าน?
                </div>
                <div className="relative w-full h-[40%] max-h-[50px]">
                    <div className="input-container w-full absolute bottom-0">
                        <Input func={(e) => setEmail(e.target.value)} placeholder=" " type="email" label="อีเมล" inputClass="w-full h-[48px] px-[16px] py-[8px] border-stone03 border-[1px] rounded-[10px] text-stone04 text-[18px]" labelClass="absolute left-[16px] bottom-[6px] text-stone04 text-[24px] font-[700]" />
                    </div>
                </div>
                <div className="flex flex-col place-content-between w-[35%] h-[20%] min-h-[80px] max-h-[90px]">
                    <button className="flex justify-center items-center w-full h-[50%] min-h-[45px] max-h-[50px] rounded-lg 
                    shadow-md bg-accent text-stone01 text-[18px] font-[700]" onClick={handleSubmit}>
                        ดำเนินการต่อ
                    </button>
                    <div className="flex justify-center items-end w-full h-[45%]">
                        <button onClick={() => setShowForgotPassword(false)} className="text-stone04">กลับเข้าสู่ระบบ</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPasswordPopUp;