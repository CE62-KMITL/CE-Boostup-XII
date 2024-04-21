import DarkBackground from "../utils/DarkBackground"

function CreateAccountPopUp() {
    return (
        <>
            <DarkBackground />
            <div className="bg-slate-100 w-[500px] h-[326px] 
            p-[33px] rounded-[30px] centre-absolute">
                <div className="w-full h-full relative">
                    <div className="text-stone05 text-[40px] font-[700] text-center">
                        สร้างแอคเคาท์ใหม่
                    </div>
                    <div className="w-[434px] h-[164px] absolute bottom-0">
                        <div className="input-container w-full absolute top-0">
                            <input type="text" name="input-field" id="input-field"
                            className="text-stone04 text-[16px] w-full px-[16px] py-[8px] 
                            border-stone03 border-[1px] rounded-[8px]" placeholder=" "/>
                            <label htmlFor="input-field" className="text-stone04 text-[18px] font-[700]
                            absolute bottom-[8px] left-[16px]">อีเมล</label>
                        </div>
                    </div>
                    <div className="w-[161px] h-[80px] flex flex-col
                    absolute bottom-0 left-[50%] translate-x-[-50%]">
                        <button className="bg-accent text-stone01 text-[18px] font-[700] 
                        w-full h-[46px] rounded-[8px] flex justify-center items-center">ดำเนินการต่อ</button>
                        <div className="w-full h-[34px]
                        flex justify-center items-end">
                            <a href=""
                            className="text-stone04 text-[16px]">กลับเข้าสู่ระบบ</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateAccountPopUp;