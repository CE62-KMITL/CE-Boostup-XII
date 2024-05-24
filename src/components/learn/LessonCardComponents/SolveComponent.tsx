function SolveComponent() {
    return (
        <div className="sticky">
            <div className="flex justify-center flex-col items-center mt-[80px] ">
                <div className="flex h-[20px] w-[317px]">
                    <div className="text-[24px] text-stone01 font-bold">ถ้าพร้อมแล้ว</div>
                    <div className="text-[24px] text-accent font-bold">เริ่มต้นทำโจทย์เลย</div>
                </div>
                <div className="mt-2">
                    <button className="bg-cream hover:bg-cream2 w-[291px] h-[49px] rounded-[10px] font-bold m-[34px] drop-shadow transition ease-in-out duration-200">
                        <div className="text-[18px] text-stone05 font-bold">ไปทำโจทย์เลย</div>
                    </button>
                </div>
            </div>
        </div>

    );
}

export default SolveComponent;
