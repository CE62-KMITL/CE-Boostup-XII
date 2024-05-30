import DarkBackground from "../utils/DarkBackground"

function CreateAccountPopUp() {
    return (
        <div className="flex justify-center items-center fixed top-0 w-screen h-screen z-10">
            <DarkBackground />
            <div className="flex flex-col items-center place-content-between absolute
            w-[50%] min-w-[450px] max-w-[500px] h-[50%] min-h-[300px] max-h-[325px] rounded-[30px] p-[36px] bg-stone01">
                <div className="w-full text-[40px] font-[700] text-center leading-[4rem]">
                    สร้างแอคเคาท์ใหม่
                </div>
                <div className="relative w-full h-[40%] max-h-[50px]">
                    <div className="input-container w-full absolute bottom-0">
                        <input type="email" name="" id=""
                        className="w-full h-[48px] px-[16px] py-[8px] border-stone03 border-[1px] rounded-[10px] 
                        text-stone04 text-[18px]" placeholder=" "/>
                        <label htmlFor="" className="absolute left-[16px] bottom-[6px] 
                        text-stone04 text-[24px] font-[700]">อีเมล</label>
                    </div>
                </div>
                <div className="flex flex-col place-content-between w-[35%] h-[20%] min-h-[80px] max-h-[90px]">
                    <button className="flex justify-center items-center w-full h-[50%] min-h-[45px] max-h-[50px] rounded-lg 
                    shadow-md bg-accent text-stone01 text-[18px] font-[700]">
                        ดำเนินการต่อ
                    </button>
                    <div className="flex justify-center items-end w-full h-[45%]">
                        <a href="" className="text-stone04">กลับเข้าสู่ระบบ</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateAccountPopUp;