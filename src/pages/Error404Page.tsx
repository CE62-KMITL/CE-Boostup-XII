import Background from "../components/utils/Background";
import { Link } from "react-router-dom";

export default function Error404Page() {
    return (
        <>
            <Background/>
            <div className="flex justify-center items-center w-screen h-screen">
                    <div className="flex flex-col items-center">
                        <h2 className="text-stone01 text-[10rem] font-bold leading-[10rem] pt-[1.25rem]">404</h2>
                        <p className="text-stone01 text-[2.25rem] font-bold">โอ้! ไม่พบหน้าเว็บไซต์ที่น้องต้องการ</p>
                    </div>
                    <Link to={'/home/1'} className="flex justify-center items-center fixed top-[75%] left-[50%] -translate-x-1/2 w-[216px] h-[46px] bg-accent rounded-[10px] text-stone01 text-[20px] font-[600]">
                        กลับสู่หน้าหลัก
                    </Link>
            </div>
        </>
    );
}