import DarkBackground from "../utils/DarkBackground"

function CreateAccountPopUp() {
    return (
        <div className="flex flex-col justify-center items-center fixed top-0 w-screen h-screen z-10">
            <DarkBackground />
            <div className="flex flex-col items-center absolute w-[33.6%] h-[42%] rounded-[2rem] p-[2rem] bg-stone01">
                <div className="w-full h-[20%] text-stone05 text-[40px] font-[700] text-center">
                    สร้างแอคเคาท์ใหม่
                </div>
                <div className="relative w-full h-[36%]">
                    <div className="input-container w-full absolute bottom-0">
                    <input type="text" name="input-field" id="input-field"
                    className="w-full px-[16px] py-[8px] border-stone03 border-[1px] rounded-[8px] 
                    text-stone04 text-[16px]" placeholder=" "/>
                    <label htmlFor="input-field" className="absolute left-[16px] bottom-[6px] 
                    text-stone04 text-[18px] font-[700]">อีเมล</label>
                    </div>
                </div>
                <div className="flex flex-col justify-end items-center w-full h-[44%]">
                    <div className="flex flex-col place-content-between w-[40%] h-[75%]">
                        <button className="flex justify-center items-center w-full h-[55%] rounded-lg 
                        shadow-md bg-accent text-stone01 text-[18px] font-[700]">
                            ดำเนินการต่อ
                        </button>
                        <div className="flex justify-center items-end">
                            <a href="" className="text-stone04 text-[16px]">กลับเข้าสู่ระบบ</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <>
        //     <DarkBackground />
        //     <div className="bg-slate-100 w-[500px] h-[326px] 
        //     p-[33px] rounded-[30px] centre-absolute">
        //         <div className="w-full h-full relative">
        //             <div className="text-stone05 text-[40px] font-[700] text-center">
        //                 สร้างแอคเคาท์ใหม่
        //             </div>
        //             <div className="w-[434px] h-[164px] absolute bottom-0">
        //                 <div className="input-container w-full absolute top-0">
        //                     <input type="text" name="input-field" id="input-field"
        //                     className="text-stone04 text-[16px] w-full px-[16px] py-[8px] 
        //                     border-stone03 border-[1px] rounded-[8px]" placeholder=" "/>
        //                     <label htmlFor="input-field" className="text-stone04 text-[18px] font-[700]
        //                     absolute bottom-[8px] left-[16px]">อีเมล</label>
        //                 </div>
        //             </div>
        //             <div className="w-[161px] h-[80px] flex flex-col
        //             absolute bottom-0 left-[50%] translate-x-[-50%]">
        //                 <button className="bg-accent text-stone01 text-[18px] font-[700] 
        //                 w-full h-[46px] rounded-[8px] flex justify-center items-center">ดำเนินการต่อ</button>
        //                 <div className="w-full h-[34px]
        //                 flex justify-center items-end">
        //                     <a href=""
        //                     className="text-stone04 text-[16px]">กลับเข้าสู่ระบบ</a>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </>
    );
}

export default CreateAccountPopUp;