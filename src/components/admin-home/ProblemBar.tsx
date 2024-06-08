function ProblemBar() {
    return (
        <div className="grid grid-cols-[repeat(16,minmax(0,1fr))]
        w-full h-[45px] mb-[0.5rem]">

            <div className="flex justify-start items-center col-span-5 px-[1rem] text-stone01">
                ชื่อโจทย์
            </div>
            <div className="flex justify-start items-center col-span-3 px-[2rem] text-stone01">
                ผู้สร้างโจทย์
            </div>
            <div className="flex justify-start items-center col-span-4 px-[5rem] text-stone01">
                เนื้อหาโจทย์
            </div>
            <div className="flex justify-start items-center col-span-2 px-[0.6rem] text-stone01">
                ความยาก
            </div>
            <div className="flex justify-end items-center col-span-2 px-[1rem] text-stone01">
                สถานะ
            </div>
        </div>
    );
}

export default ProblemBar;