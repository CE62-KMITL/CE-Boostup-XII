function ProblemBar() {
    return (
        <div className="grid grid-cols-[repeat(16,minmax(0,1fr))] gap-[0.8rem]
        w-full h-[6%] min-h-[40px] max-h-[45px] mb-[0.5rem]">

            <div className="flex justify-start items-center col-span-1 px-[0.6rem] text-stone01">
                เลขข้อ
            </div>
            <div className="flex justify-start items-center col-span-4 px-[0.6rem] text-stone01">
                ชื่อโจทย์
            </div>
            <div className="flex justify-start items-center col-span-3 px-[0.6rem] text-stone01">
                เนื้อหา
            </div>
            <div className="flex justify-start items-center col-span-3 px-[0.6rem] text-stone01">
                ความยาก
            </div>
            <div className="flex justify-start items-center col-span-2 px-[0.6rem] text-stone01">
                คะแนน
            </div>
            <div className="flex justify-start items-center col-span-2 px-[0.6rem] text-stone01">
                ผ่านแล้ว
            </div>
            <div className="flex justify-end items-center col-span-1 px-[0.6rem] text-stone01">
                สถานะ
            </div>

        </div>
    );
}

export default ProblemBar;