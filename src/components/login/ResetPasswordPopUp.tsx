import DarkBackground from "../utils/DarkBackground"

function ResetPasswordPopUp(){
    return (
        <>
            <DarkBackground />
            <div className="bg-slate-100 w-[500px] h-[472px] 
            p-[33px] rounded-[30px] centre-absolute">
                <div className="w-full h-full relative">
                    <div className="w-full h-[100px] absolute translate-x-[-50%] top-0 left-[50%]">
                        <div className="text-stone05 text-[40px] font-[700] text-center">
                            รีเซ็ตรหัสผ่าน
                        </div>
                        <div className="text-stone05 text-[16px] w-full h-[34px] flex justify-center items-end">
                            <div>ใส่รหัสผ่านใหม่</div>
                        </div>
                    </div>
                    <div className="w-full h-[296px] absolute translate-x-[-50%] top-0 left-[50%]">
                        <div className="input-container w-full absolute bottom-[90px]">
                            <input type="password" name="input-field" id="input-field"
                            className="text-stone04 text-[16px] w-full px-[16px] py-[8px] 
                            border-stone03 border-[1px] rounded-[8px]" placeholder=" "/>
                            <label htmlFor="input-field" className="text-stone04 text-[18px] font-[700]
                            absolute bottom-[8px] left-[16px]">สร้างรหัสผ่านใหม่</label>
                        </div>
                        <div className="input-container w-full absolute bottom-0">
                            <input type="password" name="input-field" id="input-field"
                            className="text-stone04 text-[16px] w-full px-[16px] py-[8px] 
                            border-stone03 border-[1px] rounded-[8px]" placeholder=" "/>
                            <label htmlFor="input-field" className="text-stone04 text-[18px] font-[700]
                            absolute bottom-[8px] left-[16px]">ยืนยันรหัสผ่าน</label>
                        </div>
                    </div>
                    <div className="w-[161px] h-[80px] flex flex-col
                    absolute bottom-0 left-[50%] translate-x-[-50%]">
                        <button className="bg-accent text-stone01 text-[18px] font-[700] 
                        w-full h-[46px] rounded-[8px] flex justify-center items-center">ดำเนินการต่อ</button>
                        <div className="w-full h-[34px]
                        flex justify-center items-end">
                            <a href=""
                            className="text-stone04 text-[16px]">กลับเข้าสู่ระบบ</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ResetPasswordPopUp;