function LoginForm() {
    return (
        <form action="" className="flex flex-col items-center place-content-between w-full h-full">
            <div className="flex flex-col items-center w-full h-[55%] mt-[20%]">
                <div className="w-full text-stone05 text-[40px] text-center font-[700] leading-[4rem] bg-stone01">
                    เข้าสู่ระบบ
                </div>
                <div className="relative w-[90%] h-[50%]">
                    <div className="input-container w-full absolute bottom-0">
                        <input type="text" name="" id=""
                        className="w-full px-[16px] py-[8px] border-stone03 border-[1px] rounded-[8px] 
                        text-stone04 text-[16px]" placeholder=" "/>
                        <label htmlFor="" className="absolute left-[16px] bottom-[6px] 
                        text-stone04 text-[18px] font-[700]">อีเมล</label>
                    </div>
                </div>
                <div className="relative w-[90%] h-[50%]">
                    <div className="input-container w-full absolute bottom-0">
                    <input type="password" name="" id=""
                    className="w-full px-[16px] py-[8px] border-stone03 border-[1px] rounded-[6px] 
                    text-stone04 text-[16px]" placeholder=" "/>
                    <label htmlFor="" className="absolute left-[16px] bottom-[6px] 
                    text-stone04 text-[18px] font-[700]">รหัสผ่าน</label>
                    </div>
                </div>
                <div className="flex flex-col justify-end items-center w-[90%] h-[30%]">
                    <div className="flex items-center place-content-between w-[95%] h-[50%]">
                        <div className="flex items-center h-full">
                            <input type="checkbox" className="scale-[0.75]"/>
                            <label htmlFor="" className="text-stone04 text-[16px]">จดจำรหัสผ่าน?</label>
                        </div>
                        <div>
                            <a href="" className="text-stone04 text-[16px]">ลืมรหัสผ่าน?</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col place-content-between w-[36%] h-[16%] mb-[1.5rem]">
                <button className="flex justify-center items-center w-full h-[55%] rounded-lg 
                shadow-md bg-accent text-stone01 text-[18px] font-[700]">
                    ตกลง
                </button>
                <div className="flex justify-center items-end">
                    <a href="" className="text-stone04 text-[16px]">ยังไม่มีแอคเคาท์?</a>
                </div>
            </div>
        </form>

    );
}

export default LoginForm