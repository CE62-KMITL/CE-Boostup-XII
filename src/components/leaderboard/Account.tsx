function Account() {
    return (
        <div className="flex text-[16px]">
        <div className="flex pl-6">1</div>
        <div className="flex w-full ml-16 justify-between text-[16px]">
          <div className="flex px-6">
            <img className="rounded-[100%] bg-red-500" src="1" alt="1" />
            <span className="ml-2">สมชาย</span>
          </div>
          <div className="flex px-6">ชื่อบ้าน</div>
          <div className="flex px-6">คะแนนรวม</div>
          <div className="flex px-6">จำนวนข้อที่ผ่าน</div>
          <div className="flex px-6">การส่งล่าสุด</div>
        </div>
      </div>
    );
}

export default Account;