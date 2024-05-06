function SearchBar() {
    return (
        <div className="flex gap-4 w-full h-[45px] mb-[1rem]">

            <div className="xl:w-[calc(100%-550px)] 2xl:w-[calc(100%-600px)] h-full">
                <div className="relative w-full h-full">
                    <input type="text" className="absolute w-full h-full rounded-md px-[0.6rem] pt-[0.2rem] focus:outline-none" placeholder="พิมพ์ชื่อโจทย์ หรือเลขข้อ"/>
                    <button className="absolute right-0
                    xl:w-[120px] 2xl:w-[130px] h-full pt-[0.2rem] rounded-r-md bg-cream" >ค้นหา</button>
                </div>
            </div>

            <div className="flex items-center place-content-between gap-4 
            xl:w-[550px] 2xl:w-[600px] h-full">
                
                {/* <div className="relative xl:w-[155px] 2xl:w-[160px] h-full"> */}
                <div className="relative w-[30%] h-full">
                    <select className="selector-bar absolute w-full h-full rounded-md px-[0.5rem] pt-[0.2rem] focus:outline-none" name="lesson" id="lesson">
                        <option value="lesson01">Lesson01</option>
                        <option value="lesson02">Lesson02</option>
                        <option value="lesson03">Lesson03</option>
                        <option value="lesson04">Lesson04</option>
                        <option value="lesson05">Lesson05</option>
                    </select>
                    <div className="flex justify-center items-center absolute right-0 xl:w-[45px] 2xl:w-[50px] h-full rounded-md bg-cream cursor-pointer pointer-events-none">
                        <svg className="arrow-rotate w-[14px] h-[8px]" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L13 1" stroke="#212429" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>

                {/* <div className="flex justify-center items-center xl:w-[220px] 2xl:w-[225px] h-full rounded-md px-[0.5rem] bg-stone01"> */}
                <div className="flex justify-center items-center w-[40%] h-full rounded-md p-[0.5rem] bg-stone01">
                    <div className="flex items-center place-content-between gap-2">
                        <p className="pt-[0.2rem]">ความยาก</p>
                        <div className="flex items-center gap-1">
                            <svg className="w-[20px] h-[20px]" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.64383 1.66675L12.1271 6.88341L17.6802 7.72508L13.662 11.7834L14.6103 17.5167L9.64383 14.8084L4.67733 17.5167L5.62563 11.7834L1.60742 7.72508L7.16058 6.88341L9.64383 1.66675Z" fill="#E2AD39" stroke="#E2AD39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <svg className="w-[20px] h-[20px]" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.64383 1.66675L12.1271 6.88341L17.6802 7.72508L13.662 11.7834L14.6103 17.5167L9.64383 14.8084L4.67733 17.5167L5.62563 11.7834L1.60742 7.72508L7.16058 6.88341L9.64383 1.66675Z" fill="#E2AD39" stroke="#E2AD39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <svg className="w-[20px] h-[20px]" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.64383 1.66675L12.1271 6.88341L17.6802 7.72508L13.662 11.7834L14.6103 17.5167L9.64383 14.8084L4.67733 17.5167L5.62563 11.7834L1.60742 7.72508L7.16058 6.88341L9.64383 1.66675Z" fill="#E2AD39" stroke="#E2AD39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            
                            <svg className="w-[20px] h-[20px]" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.0003 1.66675L12.5753 6.88341L18.3337 7.72508L14.167 11.7834L15.1503 17.5167L10.0003 14.8084L4.85033 17.5167L5.83366 11.7834L1.66699 7.72508L7.42533 6.88341L10.0003 1.66675Z" stroke="#E2AD39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <svg className="w-[20px] h-[20px]" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.0003 1.66675L12.5753 6.88341L18.3337 7.72508L14.167 11.7834L15.1503 17.5167L10.0003 14.8084L4.85033 17.5167L5.83366 11.7834L1.66699 7.72508L7.42533 6.88341L10.0003 1.66675Z" stroke="#E2AD39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* <button className="xl:w-[145px] 2xl:w-[150px] h-full rounded-md px-[0.5rem] bg-cream"> */}
                <button className="w-[30%] h-full rounded-md px-[0.5rem] pt-[0.2rem] bg-cream">
                    สุ่มโจทย์เลย
                </button>

            </div>
        </div>
    );
}

export default SearchBar;