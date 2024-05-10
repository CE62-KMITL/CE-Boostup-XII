function UserInfo({ username, email, house }: {
    username: string,
    email: string,
    house: string,
}) {
    return (
        <div className="m-5">
            <div className="flex">
                <div className="text-[32px] font-bold">{username}</div>
                <div className="text-[16px] ml-[15px] mt-[16px] text-stone04">{email}</div>
                <button className="flex items-center bg-accent  hover:bg-accent-hover w-[149px] h-[42px] ml-[272px] rounded-lg drop-shadow-md">
                    <div className="text-stone01 ml-[16px]">แก้ไขโปรไฟล์</div>
                    <div className="ml-[8px]">
                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 2.505c-.897 0-1.794.34-2.474 1.02L4.458 14.592a1.75 1.75 0 0 0-.445.758L2.53 20.544a.75.75 0 0 0 .926.927l5.196-1.484c.285-.082.546-.234.757-.445L20.475 8.475a3.51 3.51 0 0 0 0-4.95A3.488 3.488 0 0 0 18 2.505Zm0 1.491c.51 0 1.02.197 1.413.59h.001c.788.787.788 2.04 0 2.828l-.97.97-2.827-2.828.97-.97c.392-.393.903-.59 1.413-.59Zm-3.444 2.62 2.828 2.828-9.037 9.037a.252.252 0 0 1-.108.064l-3.897 1.113 1.113-3.897v-.001a.246.246 0 0 1 .064-.108l9.037-9.036Z" fill="#fff" /></svg>
                    </div>
                </button>
            </div>
            <div className="font-bold">{house}</div>

        </div>

    );
}

export default UserInfo