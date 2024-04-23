function LoginForm() {
    return (
        <form action="" className="w-full h-[438px] absolute bottom-0">
            <div className="border-none border-2 border-red-600 w-full h-full relative">
                <div className="w-[434px]] h-auto border-none border-2 border-accent flex flex-col items-center">
                    <div className="text-stone05 text-[40px] text-center font-[700] w-full h-[66px] border-none border-4 border-orange-600">
                        เข้าสู่ระบบ    
                    </div>
                    <div className="w-[434px] h-[242px] top-[50%] flex flex-col border-none border-2 border-lime-600">
                        <div className="w-full h-[92px] relative border-none border-2 border-blue-600">
                            <div className="input-container w-full absolute bottom-0">
                                <input type="text" name="input-field" id="input-field"
                                className="text-stone04 text-[16px] w-full px-[16px] py-[8px] 
                                border-stone03 border-[1px] rounded-[8px]" placeholder=" "/>
                                <label htmlFor="input-field" className="text-stone04 text-[18px] font-[700]
                                absolute bottom-[8px] left-[16px]">อีเมล</label>
                            </div>
                        </div>
                        <div className="w-full h-[92px] relative border-none border-2 border-purple-600">
                            <div className="input-container w-full absolute bottom-0">
                                <input type="password" name="input-field" id="input-field"
                                className="text-stone04 text-[16px] w-full px-[16px] py-[8px] 
                                border-stone03 border-[1px] rounded-[8px]" placeholder=" "/>
                                <label htmlFor="input-field" className="text-stone04 text-[18px] font-[700]
                                absolute bottom-[8px] left-[16px]">รหัสผ่าน</label>
                            </div>
                        </div>
                        <div className="w-full h-[58px] border-none border-2 border-blue-600 flex flex-col justify-end items-center">
                            <div className="w-[414px] h-[26px] relative border-none border-2 border-red-600">
                                <div className="w-[134px] absolute left-0">
                                    <div className="flex items-center gap-[8px]">
                                        <input type="checkbox" className="w-[24px] h-[24px] rounded-full"/>
                                        <label htmlFor="" className="text-stone04 text-[16px]">จดจำรหัสผ่าน?</label>
                                    </div>
                                </div>
                                <div className="absolute right-0">
                                    <a href="" className="text-stone04 text-[16px]">ลืมรหัสผ่าน?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[163px] h-[86px] absolute translate-x-[-50%] bottom-[24px] left-[50%] flex flex-col">
                    <button className="text-stone01 text-[18px] font-[700] bg-accent
                    w-full h-[46px] rounded-[10px] flex justify-center items-center">ตกลง</button>
                    <div className="w-full h-[40px] flex justify-center items-end">
                        <a href="" className="text-stone04 text-[16px]">ยังไม่มีแอคเคาท์?</a>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default LoginForm