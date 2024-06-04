function LogOutButton() {
    return(
        <>
            <button className="flex justify-center items-center gap-2 w-[156px] h-[42px] rounded-[8px] bg-accent hover:bg-accent02 shadow-md">
                <span className="text-stone01 text-[16px] font-medium">ออกจากระบบ</span>
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 13L19 9M19 9L15 5M19 9H5M11 13V14C11 15.6569 9.6569 17 8 17H4C2.34315 17 1 15.6569 1 14V4C1 2.34315 2.34315 1 4 1H8C9.6569 1 11 2.34315 11 4V5" stroke="#F8F9FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </>
    );
}

export default LogOutButton