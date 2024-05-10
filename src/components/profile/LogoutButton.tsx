function LogOutButton() {
    return(
        <div>
            <button className="flex items-center bg-accent hover:bg-accent-hover w-[156px] h-[42px] ml-[272px] rounded-lg drop-shadow-md">
                    <div className="text-stone01 ml-[16px]">ออกจากระบบ</div>
                    <div className="ml-[8px]">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m17 16 4-4m0 0-4-4m4 4H7m6 4v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1" stroke="#F8F9FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
            </button>
        </div>
    );
}

export default LogOutButton