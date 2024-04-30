import DarkBackground from "../utils/DarkBackground"

function ResetPasswordPopUp(){
    return (
        <div className="flex justify-center items-center fixed top-0 w-screen h-screen z-10">
            <DarkBackground />
            <div className="flex flex-col items-center place-content-between absolute
            w-[50%] min-w-[500px] max-w-[520px] h-[40%] min-h-[480px] max-h-[500px] rounded-[2rem] p-[2rem] bg-stone01">
                <div className="flex flex-col items-center w-full h-auto mt-[1rem]">
                    <div className="text-stone05 text-[40px] font-[700] leading-[4rem]">
                        รีเซ็ตรหัสผ่าน
                    </div>
                    <p>ใส่รหัสผ่านใหม่</p>
                </div>

                <div className="flex flex-col items-center w-full h-[50%] pb-[1rem]">
                    <div className="relative w-[90%] h-[50%] min-h-[90px] max-h-[100px]">
                        <div className="input-container w-full absolute bottom-0">
                            <input type="password" name="input-field" id="input-field"
                            className="w-full px-[16px] py-[8px] border-stone03 border-[1px] rounded-[8px] 
                            text-stone04 text-[16px]" placeholder=" "/>
                            <label htmlFor="input-field" className="absolute left-[16px] bottom-[6px] 
                            text-stone04 text-[18px] font-[700]">สร้างรหัสผ่านใหม่</label>
                        </div>
                    </div>
                    <div className="relative w-[90%] h-[50%] min-h-[90px] max-h-[100px]">
                        <div className="input-container w-full absolute bottom-0">
                            <input type="password" name="input-field" id="input-field"
                            className="w-full px-[16px] py-[8px] border-stone03 border-[1px] rounded-[8px] 
                            text-stone04 text-[16px]" placeholder=" "/>
                            <label htmlFor="input-field" className="absolute left-[16px] bottom-[6px] 
                            text-stone04 text-[18px] font-[700]">ยืนยันรหัสผ่าน</label>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col place-content-between w-[36%] h-[25%] min-h-[75px] max-h-[85px]">
                    <button className="flex justify-center items-center w-full h-[55%] rounded-lg 
                    shadow-md bg-accent text-stone01 text-[18px] font-[700]">
                        ตกลง
                    </button>
                    <div className="flex justify-center items-end w-full h-[45%]">
                        <a href="" className="text-stone04 text-[16px]">กลับเข้าสู่ระบบ</a>
                    </div>
                </div>

            </div>
        </div>

        // <>
        //     <DarkBackground />
        //     <div className="bg-slate-100 w-[500px] h-[472px] 
        //     p-[33px] rounded-[30px] centre-absolute">
        //         <div className="w-full h-full relative">
        //             <div className="w-full h-[100px] absolute translate-x-[-50%] top-0 left-[50%]">
        //                 <div className="text-stone05 text-[40px] font-[700] text-center">
        //                     รีเซ็ตรหัสผ่าน
        //                 </div>
        //                 <div className="text-stone05 text-[16px] w-full h-[34px] flex justify-center items-end">
        //                     <div>ใส่รหัสผ่านใหม่</div>
        //                 </div>
        //             </div>
        //             <div className="w-full h-[296px] absolute translate-x-[-50%] top-0 left-[50%]">
        //                 <div className="input-container w-full absolute bottom-[90px]">
        //                     <input type="password" name="input-field" id="input-field"
        //                     className="text-stone04 text-[16px] w-full px-[16px] py-[8px] 
        //                     border-stone03 border-[1px] rounded-[8px]" placeholder=" "/>
        //                     <label htmlFor="input-field" className="text-stone04 text-[18px] font-[700]
        //                     absolute bottom-[8px] left-[16px]">สร้างรหัสผ่านใหม่</label>
        //                 </div>
        //                 <div className="input-container w-full absolute bottom-0">
        //                     <input type="password" name="input-field" id="input-field"
        //                     className="text-stone04 text-[16px] w-full px-[16px] py-[8px] 
        //                     border-stone03 border-[1px] rounded-[8px]" placeholder=" "/>
        //                     <label htmlFor="input-field" className="text-stone04 text-[18px] font-[700]
        //                     absolute bottom-[8px] left-[16px]">ยืนยันรหัสผ่าน</label>
        //                 </div>
        //             </div>
        //             <div className="w-[161px] h-[80px] flex flex-col
        //             absolute bottom-0 left-[50%] translate-x-[-50%]">
        //                 <button className="bg-accent text-stone01 text-[18px] font-[700] 
        //                 w-full h-[46px] rounded-[8px] flex justify-center items-center">ดำเนินการต่อ</button>
        //                 <div className="w-full h-[34px]
        //                 flex justify-center items-end">
        //                     <a href="" className="text-stone04 text-[16px]">กลับเข้าสู่ระบบ</a>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </>
    );
}

export default ResetPasswordPopUp;