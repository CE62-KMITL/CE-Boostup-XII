function LoginForm() {
    return (
        <form action="" className="w-full h-[414px] px-[24px] mb-[24px] 
        absolute bottom-0">
            <div className="text-stone05 text-[40px] text-center font-[700]">
                เข้าสู่ระบบ    
            </div>
            <div>
                <div className="w-full h-[88px] relative">
                    <div className="input-container w-full absolute bottom-0">
                        <input type="text" name="input-field" id="input-field"
                        className="text-stone04 text-[16px] w-full px-[16px] py-[8px] 
                        border-stone03 border-[1px] rounded-[8px]" placeholder=" "/>
                        <label htmlFor="input-field" className="text-stone04 text-[18px] font-[700]
                        absolute bottom-[8px] left-[16px]">อีเมล</label>
                    </div>
                </div>
                <div className="w-full h-[88px] relative">
                    <div className="input-container w-full absolute bottom-0">
                        <input type="password" name="input-field" id="input-field"
                        className="text-stone04 text-[16px] w-full px-[16px] py-[8px] 
                        border-stone03 border-[1px] rounded-[8px]" placeholder=" "/>
                        <label htmlFor="input-field" className="text-stone04 text-[18px] font-[700]
                        absolute bottom-[8px] left-[16px]">รหัสผ่าน</label>
                    </div>
                </div>
                <div className="relative my-[16px]">
                    <div className="absolute left-0
                    flex items-center">
                        <input type="radio" className="scale-150 mx-[8px]"/>
                        <label htmlFor="" className="text-stone04 text-[16px]">จดจำรหัสผ่าน?</label>
                    </div>
                    <div className="absolute right-0">
                        <a href="" 
                        className="text-stone04 text-[16px]">ลืมหรัสผ่าน</a>
                    </div>
                </div>
            </div>
            <div className="w-[163px] h-[86px]
            absolute tran bottom-0 left-[50%] translate-x-[-50%]">
                <button className="bg-accent text-stone01 text-[18px] font-[700] 
                w-full h-[46px] rounded-[10px] 
                flex justify-center items-center">ตกลง</button>
                <div className="w-full h-[40px]
                flex justify-center items-end">
                    <a href=""
                    className="text-stone04 text-[16px]">ยังไม่มีแอคเคาท์?</a>
                </div>
            </div>
        </form>
    )
}

export default LoginForm