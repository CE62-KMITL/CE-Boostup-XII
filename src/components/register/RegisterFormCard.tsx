function RegisterFormCard() {
    return (
        <div className="border-2 border-slate-50 w-full h-full rounded-[30px] lg:p-[20px] xl:p-[30px] 2xl:p-[36px] bg-stone01">
            <form action="" className='border-none border-blue-500 flex flex-col items-center place-content-between w-full h-full'>
                <div className='text-stone05 text-[40px] text-center font-[700] xl:leading-[6rem] 2xl:leading-[8rem]'>
                    ลงทะเบียน
                </div>

                <div className="border-none border-red-500 flex flex-col 
                xl:w-[372px] 2xl:w-[480px] xl:h-[400px] 2xl:h-[500px]">
                    
                    <div className="border-none border-lime-500 relative w-full h-[40%] xl:max-h-[80px] 2xl:max-h-[90px]">
                        <div className="input-container w-full absolute bottom-0">
                            <input type="password" name="" id=""
                            className="w-full h-[48px] px-[16px] py-[8px] border-stone03 border-[1px] rounded-[8px] 
                            text-stone04 text-[16px]" placeholder=" "/>
                            <label htmlFor="" className="absolute left-[16px] bottom-[10px] 
                            text-stone04 text-[18px] font-[700]">ชื่อผู้ใช้</label>
                        </div>
                    </div>

                    <ol className="list list-disc list-inside xl:p-[12px_8px] 2xl:p-[16px_8px] leading-[1.2rem]">
                        <li>ควรไม่เกิน 10 ตัวอักษร</li>
                    </ol>

                    <div className="border-none border-lime-500 relative w-full h-[40%] xl:max-h-[80px] 2xl:max-h-[90px]">
                        <div className="input-container w-full absolute bottom-0">
                            <input type="password" name="" id=""
                            className="w-full h-[48px] px-[16px] py-[8px] border-stone03 border-[1px] rounded-[8px] 
                            text-stone04 text-[16px]" placeholder=" "/>
                            <label htmlFor="" className="absolute left-[16px] bottom-[10px] 
                            text-stone04 text-[18px] font-[700]">รหัสผ่าน</label>
                        </div>
                    </div>

                    <ol className="list list-disc list-inside xl:p-[12px_8px] 2xl:p-[16px_8px] leading-[1.2rem]">
                        <li>มีทั้งหมด 8 ตัวอักษรขึ้นไป</li>
                        <li>ประกอบด้วยตัวพิมพ์ใหญ่, ตัวพิมพ์เล็ก, ตัวเลข และอักษรพิเศษ</li>
                    </ol>

                    <div className="border-none border-lime-500 relative w-full h-[40%] xl:max-h-[80px] 2xl:max-h-[90px]">
                        <div className="input-container w-full absolute bottom-0">
                            <input type="password" name="" id=""
                            className="w-full h-[48px] px-[16px] py-[8px] border-stone03 border-[1px] rounded-[8px] 
                            text-stone04 text-[16px]" placeholder=" "/>
                            <label htmlFor="" className="absolute left-[16px] bottom-[10px] 
                            text-stone04 text-[18px] font-[700]">ยืนยันรหัสผ่าน</label>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col items-center place-content-between w-[40%] min-w-[170px] max-w-[180px] h-[12%] min-h-[75px] max-h-[85px]">
                    <button className="flex justify-center items-center w-full h-[50%] min-h-[45px] max-h-[50px] rounded-lg 
                    shadow-md bg-accent text-stone01 text-[18px] font-[700]">
                        ตกลง
                    </button>
                    <a href="" className="text-stone04 leading-[1.2rem]">มีแอคเคาท์แล้ว?</a>
                </div>

            </form>
        </div>

        // <div className="w-full h-full rounded-[2rem] p-[2rem] bg-stone01">
        //     <form action="" className="flex flex-col items-center place-content-between w-full h-full">
        //         <div className='flex flex-col w-[85%] h-[80%] min-h-[480px] max-h-[640px]'>
        //             <div className='text-stone05 text-[40px] text-center font-[700] leading-[3rem] bg-stone01'>
        //                 ลงทะเบียน
        //             </div>

        //             <div className="relative w-full h-[20%] min-h-[90px] max-h-[120px]">
        //                 <div className="input-container w-full absolute bottom-0">
        //                     <input type="text" name="" id=""
        //                     className="w-full px-[16px] py-[8px] border-stone03 border-[1px] rounded-[8px] 
        //                     text-stone04 text-[16px]" placeholder=" "/>
        //                     <label htmlFor="" className="absolute left-[16px] bottom-[6px] 
        //                     text-stone04 text-[18px] font-[700]">อีเมล</label>
        //                 </div>
        //             </div>

        //             <ol className="list list-disc list-inside py-[0.5rem] text-stone05 text-[16px] leading-[1.5rem]">
        //                 <li>ควรไม่เกิน 10 ตัวอักษร</li>
        //             </ol>

        //             <div className="relative w-full h-[20%] min-h-[90px] max-h-[120px]">
        //                 <div className="input-container w-full absolute bottom-0">
        //                     <input type="password" name="" id=""
        //                     className="w-full px-[16px] py-[8px] border-stone03 border-[1px] rounded-[8px] 
        //                     text-stone04 text-[16px]" placeholder=" "/>
        //                     <label htmlFor="" className="absolute left-[16px] bottom-[6px] 
        //                     text-stone04 text-[18px] font-[700]">รหัสผ่าน</label>
        //                 </div>
        //             </div>

        //             <ol className="list list-disc list-inside py-[0.5rem] text-stone05 text-[16px] leading-[1.5rem]">
        //                 <li>มีทั้งหมด 8 ตัวอักษรขึ้นไป</li>
        //                 <li>ประกอบด้วยตัวพิมพ์ใหญ่, ตัวพิมพ์เล็ก, ตัวเลข และอักษรพิเศษ</li>
        //             </ol>

        //             <div className="relative w-full h-[20%] min-h-[90px] max-h-[120px]">
        //                 <div className="input-container w-full absolute bottom-0">
        //                     <input type="password" name="" id=""
        //                     className="w-full px-[16px] py-[8px] border-stone03 border-[1px] rounded-[8px] 
        //                     text-stone04 text-[16px]" placeholder=" "/>
        //                     <label htmlFor="" className="absolute left-[16px] bottom-[6px] 
        //                     text-stone04 text-[18px] font-[700]">ยืนยันรหัสผ่าน</label>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="flex flex-col place-content-between w-[32%] h-[12%] min-h-[80px] max-h-[90px]">
        //             <button className="flex justify-center items-center w-full h-[55%] rounded-lg 
        //             shadow-md bg-accent text-stone01 text-[18px] font-[700]">
        //                 ตกลง
        //             </button>
        //             <div className="flex justify-center items-end w-full h-[45%]">
        //                 <a href="" className="text-stone04 text-[16px]">มีแอคเคาท์แล้ว?</a>
        //             </div>
        //         </div>

        //     </form>

        // </div>
    );
}

export default RegisterFormCard;