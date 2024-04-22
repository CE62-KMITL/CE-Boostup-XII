function FormCard() {
    return (
        <div className="bg-stone01 w-[540px] h-[640px] px-[48px] py-[36px] rounded-[30px]">
            <div className="w-full h-full relative border-2 border-red-600">
                <div className="text-stone05 text-[40px] font-[700] w-full h-[60px] 
                flex justify-center items-start border-2 border-red-600">
                    ลงทะเบียน
                </div>
                <div className="w-full h-[140px] flex flex-col justify-end border-2 border-blue-600">
                    <div className="w-full h-[88px] my-[16px] relative">
                        <div className="input-container w-full 
                        absolute bottom-0">
                            <input type="text" name="input-field" id="input-field"
                            className="text-stone04 text-[16px] 
                            w-full px-[16px] py-[8px] 
                            border-stone03 border-[1px] rounded-[8px]" placeholder=" "/>
                            <label htmlFor="input-field" 
                            className="text-stone04 text-[18px] font-[700]
                            absolute bottom-[8px] left-[16px]">ชื่อผู้ใช้</label>
                        </div>
                    </div>
                    <div>
                        <ol className="list-disc list-inside text-[16px]">
                            <li>ควรไม่เกิน 10 ตัวอักษร</li>
                        </ol>
                    </div>
                </div>
                <div className="w-full h-[160px] flex flex-col justify-end border-2 border-blue-600">
                    <div className="w-full h-[88px] my-[16px] relative">
                        <div className="input-container w-full 
                        absolute bottom-0">
                            <input type="text" name="input-field" id="input-field"
                            className="text-stone04 text-[16px] 
                            w-full px-[16px] py-[8px] 
                            border-stone03 border-[1px] rounded-[8px]" placeholder=" "/>
                            <label htmlFor="input-field" 
                            className="text-stone04 text-[18px] font-[700]
                            absolute bottom-[8px] left-[16px]">รหัสผ่าน</label>
                        </div>
                    </div>
                    <div>
                        <ol className="list-disc list-inside">
                            <li>มีทั้งหมด 8 ตัวอักษรขึ้นไป</li>
                            <li>ประกอบด้วยตัวพิมพ์ใหญ่, ตัวพิมพ์เล็ก, ตัวเลข และอักษรพิเศษ</li>
                        </ol>
                    </div>
                </div>
                <div className="w-full h-[96px] border-2 border-lime-600">
                    <div className="w-full h-full my-[16px] relative">
                        <div className="input-container w-full translate-y-[-50%]
                        absolute bottom-0 border-2 border-orange-600">
                            <input type="text" name="input-field" id="input-field"
                            className="text-stone04 text-[16px] 
                            w-full px-[16px] py-[8px] 
                            border-stone03 border-[1px] rounded-[8px]" placeholder=" "/>
                            <label htmlFor="input-field" 
                            className="text-stone04 text-[18px] font-[700]
                            absolute bottom-[8px] left-[16px]">ยืนยันรหัสผ่าน</label>
                        </div>
                    </div>
                </div>
                <div className="w-[181px] h-[80px] flex flex-col
                absolute translate-x-[-50%] bottom-0 left-[50%]">
                    <button className="text-stone01 text-[18px] font-[700] bg-accent
                    w-full h-[46px] rounded-[10px] 
                    flex justify-center items-center">ตกลง</button>
                    <div className="w-full h-[40px]
                    flex justify-center items-end">
                        <a href=""
                        className="text-stone04 text-[16px]">มีแอคเคาท์แล้ว?</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormCard;