import LogoIcon from "./LogoIcon"

function LoginCard() {
    

    return (
        <div className="w-[482px] h-[704px] 
        AbsoluteCentre relative">
            <div className="absolute top-0 left-[50%] translate-x-[-50%] z-10">
                <LogoIcon />
            </div>
            <div 
            className="w-full h-[527px] 
            absolute translate-x-[-50%] bottom-0 left-[50%] z-0">
                <div className="bg-stone01 w-[130px] h-full 
                absolute left-0 
                rounded-tl-[20px] rounded-tr-[15px] 
                rounded-bl-[20px] rounded-br-[0px]"></div>
                <div className="bg-stone01 w-[130px] h-full 
                absolute right-0 
                rounded-tl-[15px] rounded-tr-[20px] 
                rounded-bl-[0px] rounded-br-[20px]"></div>
                <div className="bg-stone01 w-full h-[460px]
                absolute left-0 bottom-0 
                rounded-[20px]"></div>
                <div className="center-above-holder">
                    <div className="curved-corner-bottomleft"></div>
                    <div className="curved-corner-bottomright"></div>
                </div>
                <form action="" className="w-full h-[414px] px-[24px] mb-[24px] 
                absolute bottom-0">
                    <div className="text-stone05 text-[40px] text-center font-[700]">
                        เข้าสู่ระบบ    
                    </div>
                    <div>
                        <div className="mb-[4px]">
                            <div className="h-[40px] 
                            flex justify-start items-center">
                                <label htmlFor="" 
                                className="text-stone04 text-[18px] font-[700]">อีเมล</label>
                            </div>
                            <input type="text" className="text-stone04 text-[18px] border-[1px] border-stone04 
                            w-full h-[48px] px-[16px] py-[8px] rounded-[8px]"/>
                        </div>
                        <div className="mb-[24px]">
                            <div className="h-[40px] 
                            flex justify-start items-center">
                                <label htmlFor="" 
                                className="text-stone04 text-[18px] font-[700]">รหัสผ่าน</label>
                            </div>
                            <input type="password" className="text-stone04 text-[18px] border-[1px] border-stone04 
                            w-full h-[48px] px-[16px] py-[8px] rounded-[8px]"/>
                            {/* <div className="text-[18px] border-stone04
                            w-full h-[48px] border-[1px] px-[16px] py-[8px] rounded-[8px]
                            flex items-center ">
                                <input type="password" className="w-full" id="password"/>
                                <img className="w-[36px] h-[36px] 
                                cursor-pointer" id="password-icon"
                                src="https://cdn-icons-png.flaticon.com/512/6195/6195699.png" alt="" />
                            </div> */}
                        </div>
                        <div className="relative">
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
            </div>
        </div>
    )
}

export default LoginCard