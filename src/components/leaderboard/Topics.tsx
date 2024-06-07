function Topics() {
  return (
    <div
      className="grid grid-cols-[repeat(16,minmax(0,1fr))]
  w-full h-[45px] mb-[0.5rem]"
    >
      <div className="flex justify-start items-center col-span-1 px-[1rem] ">
        อันดับ
      </div>
      <div className="flex justify-start items-center col-span-4 px-[0.6rem] ">
        ชื่อ
      </div>
      <div className="flex justify-start items-center col-span-3 px-[0.6rem] ">
      ชื่อบ้าน
      </div>
      <div className="flex justify-start items-center col-span-3 px-[0.6rem] ">
      คะแนนรวม
      </div>
      <div className="flex justify-start items-center col-span-3 px-[0.6rem] ">
      จำนวนข้อที่ผ่าน
      </div>
      <div className="flex justify-start items-center col-span-2 px-[0rem] ">
      การส่งล่าสุด
      </div>
    </div>
  );
}

export default Topics;
