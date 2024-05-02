function SolveComponent() {
    return (
        <div className="flex justify-center flex-col items-center mt-[180px]">
            <div className="flex h-[20px] w-[317px]">
                <div className="text-[24px] text-stone01 font-bold">ถ้าพร้อมแล้ว</div>
                <div className="text-[24px] text-accent font-bold">เริ่มต้นทำโจทย์เลย</div>
            </div>
            <div className="mt-2">
                <button className="bg-cream w-[291px] h-[49px] rounded-xl font-bold m-[30px] drop-shadow">
                    <div className="text-[18px] text-stone05 font-bold">ไปทำโจทย์เลย</div>
                </button>
            </div>
        </div>
    );
}

export default SolveComponent;
