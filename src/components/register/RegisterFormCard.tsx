function RegisterFormCard() {
    return (
        <div className="w-full h-full rounded-[2rem] p-[2rem] bg-stone01">
            <form action="" className="flex flex-col items-center place-content-between w-full h-full">
                <div className='flex flex-col w-[85%] h-[80%] min-h-[480px] max-h-[640px]'>
                    <div className='text-stone05 text-[40px] text-center font-[700] leading-[3rem] bg-stone01'>
                        ลงทะเบียน
                    </div>

                    <div className="relative w-full h-[20%] min-h-[90px] max-h-[120px]">
                        <div className="input-container w-full absolute bottom-0">
                            <input type="text" name="" id=""
                            className="w-full px-[16px] py-[8px] border-stone03 border-[1px] rounded-[8px] 
                            text-stone04 text-[16px]" placeholder=" "/>
                            <label htmlFor="" className="absolute left-[16px] bottom-[6px] 
                            text-stone04 text-[18px] font-[700]">อีเมล</label>
                        </div>
                    </div>

                    <ol className="list list-disc list-inside py-[0.5rem] text-stone05 text-[16px] leading-[1.5rem]">
                        <li>ควรไม่เกิน 10 ตัวอักษร</li>
                    </ol>

                    <div className="relative w-full h-[20%] min-h-[90px] max-h-[120px]">
                        <div className="input-container w-full absolute bottom-0">
                            <input type="password" name="" id=""
                            className="w-full px-[16px] py-[8px] border-stone03 border-[1px] rounded-[8px] 
                            text-stone04 text-[16px]" placeholder=" "/>
                            <label htmlFor="" className="absolute left-[16px] bottom-[6px] 
                            text-stone04 text-[18px] font-[700]">รหัสผ่าน</label>
                        </div>
                    </div>

                    <ol className="list list-disc list-inside py-[0.5rem] text-stone05 text-[16px] leading-[1.5rem]">
                        <li>มีทั้งหมด 8 ตัวอักษรขึ้นไป</li>
                        <li>ประกอบด้วยตัวพิมพ์ใหญ่, ตัวพิมพ์เล็ก, ตัวเลข และอักษรพิเศษ</li>
                    </ol>

                    <div className="relative w-full h-[20%] min-h-[90px] max-h-[120px]">
                        <div className="input-container w-full absolute bottom-0">
                            <input type="password" name="" id=""
                            className="w-full px-[16px] py-[8px] border-stone03 border-[1px] rounded-[8px] 
                            text-stone04 text-[16px]" placeholder=" "/>
                            <label htmlFor="" className="absolute left-[16px] bottom-[6px] 
                            text-stone04 text-[18px] font-[700]">ยืนยันรหัสผ่าน</label>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col place-content-between w-[32%] h-[12%] min-h-[80px] max-h-[90px]">
                    <button className="flex justify-center items-center w-full h-[55%] rounded-lg 
                    shadow-md bg-accent text-stone01 text-[18px] font-[700]">
                        ตกลง
                    </button>
                    <div className="flex justify-center items-end w-full h-[45%]">
                        <a href="" className="text-stone04 text-[16px]">มีแอคเคาท์แล้ว?</a>
                    </div>
                </div>

            </form>

        </div>
    )
}

export default RegisterFormCard;