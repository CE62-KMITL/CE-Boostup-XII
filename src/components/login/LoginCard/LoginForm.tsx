function LoginForm() {
    return (
        <div className="absolute bottom-0 w-full h-[90%] min-h-[400px] max-h-[450px] p-[30px]">
            <form action="" className="flex flex-col items-center place-content-between w-full h-full">
                <div className="flex flex-col items-center place-content-between w-full h-[75%]">
                    <div className="w-full text-stone05 text-[40px] text-center font-[700] leading-[3rem] bg-stone01">
                        เข้าสู่ระบบ
                    </div>
                    <div className="relative w-full h-[40%] max-h-[90px]">
                        <div className="input-container w-full absolute bottom-0">
                            <input type="text" name="" id=""
                            className="w-full h-[48px] px-[16px] py-[8px] border-stone03 border-[1px] rounded-[8px] 
                            text-stone04 text-[16px]" placeholder=" "/>
                            <label htmlFor="" className="absolute left-[16px] bottom-[10px] 
                            text-stone04 text-[18px] font-[700]">อีเมล</label>
                        </div>
                    </div>
                    <div className="relative w-full h-[40%] max-h-[90px]">
                        <div className="input-container w-full absolute bottom-0">
                            <input type="password" name="" id=""
                            className="w-full h-[48px] px-[16px] py-[8px] border-stone03 border-[1px] rounded-[6px] 
                            text-stone04 text-[16px]" placeholder=" "/>
                            <label htmlFor="" className="absolute left-[16px] bottom-[10px] 
                            text-stone04 text-[18px] font-[700]">รหัสผ่าน</label>
                        </div>
                    </div>
                    {/* <div className="border-2 border-red-500 flex justify-center items-center w-full h-[30%] max-h-[50px]"> */}
                        <div className="flex items-center place-content-between w-[96%]">
                            <div className="flex items-center place-content-between h-full">
                                <input type="checkbox" className="scale-[0.66]"/>
                                <label htmlFor="" className="text-stone04 text-[16px]">จดจำรหัสผ่าน?</label>
                            </div>
                            <div>
                                <a href="" className="text-stone04 text-[16px]">ลืมรหัสผ่าน?</a>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
                <div className="flex flex-col items-center place-content-between w-[40%] h-[22.5%] min-h-[80px] max-h-[90px]">
                    <button className="flex justify-center items-center w-full h-[50%] min-h-[45px] max-h-[50px] rounded-lg 
                    shadow-md bg-accent text-stone01 text-[18px] font-[700]">
                        ตกลง
                    </button>
                    <a href="" className="text-stone04">ยังไม่มีแอคเคาท์?</a>
                </div>
            </form> 
        </div>

    );
}

export default LoginForm