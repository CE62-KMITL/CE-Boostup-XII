import { useState } from "react";
import Button from "../../utils/OldButton";
import Input from "../../utils/Input";
import axios from "axios";
import { Cookies } from "react-cookie";
import { Link } from "react-router-dom";

type LoginFormProps = {
    setShowForgotPassword: React.Dispatch<React.SetStateAction<boolean>>
}

function LoginForm({ setShowForgotPassword }: LoginFormProps) {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [savePassword, setSavePassword] = useState<boolean>(false)
    const cookies = new Cookies()

    async function handleSubmit() {
        try {
            const response = await axios.post(`${import.meta.env.VITE_HOST_API}/auth/login`, {
                email: email,
                password: password
            })
            cookies.set("token", response.data.token, { path: "/" })
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
            <div className="absolute bottom-0 w-full h-[90%] min-h-[400px] max-h-[450px] p-[30px]">
                <div className="flex flex-col items-center place-content-between w-full h-full">
                    <div className="flex flex-col items-center place-content-between w-full h-[75%]">
                        <div className="w-full text-stone05 text-[40px] text-center font-[700] leading-[3rem] bg-stone01">
                            เข้าสู่ระบบ
                        </div>
                        <div className="relative w-full h-full max-h-[90px]">
                            <div className="input-container w-full absolute bottom-0">
                                <Input label="อีเมล" type="email" placeholder=" " required={true} inputClass="w-full h-[48px] px-[16px] py-[8px] border-stone03 border-[1px] rounded-[10px] text-stone04 text-[18px]" labelClass="absolute left-[16px] bottom-[6px] text-stone04 text-[24px] font-[700]" func={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="relative w-full h-full max-h-[90px]">
                            <div className="input-container w-full absolute bottom-0">
                                <Input label="รหัสผ่าน" type="password" placeholder=" " required={true} inputClass="w-full h-[48px] px-[16px] py-[8px] border-stone03 border-[1px] rounded-[10px] text-stone04 text-[18px]" labelClass="absolute left-[16px] bottom-[6px] text-stone04 text-[24px] font-[700]" func={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="flex items-center place-content-between w-[96%]">
                            <div className="flex items-center place-content-between h-full">
                                <Input label="จดจำรหัสผ่าน?" type="checkbox" placeholder="_" required={false} inputClass="scale-[0.66]" labelClass="text-stone04 text-[16px]" func={(e) => setSavePassword(e.target.checked)} />
                            </div>
                            <div>
                                <button onClick={() => setShowForgotPassword(true)} className="text-stone04 text-[16px]">ลืมรหัสผ่าน?</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center place-content-between w-[40%] h-[22.5%] min-h-[80px] max-h-[90px]">
                        <Button type={2} mode={0} validate={true} text="ตกลง" img="" ClickFunc={async () => await handleSubmit()} />
                        <Link to="/register" className="text-stone04">ยังไม่มีแอคเคาท์?</Link>
                    </div>
                </div>
            </div>
    );
}

export default LoginForm