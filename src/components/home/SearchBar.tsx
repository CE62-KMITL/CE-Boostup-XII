function SearchBar() {
    return (
        <div className="flex gap-[0.8rem]
        w-full h-[6%] min-h-[40px] max-h-[45px] mb-[2rem]">
            <div className="w-[60%] h-full">
                <div className="relative w-full h-full">
                    <input type="text" className="absolute w-full h-full rounded-md focus:outline-none" placeholder=" "/>
                    <button className="absolute right-0 
                    w-[20%] min-w-[125px] max-w-[100px] h-full rounded-r-md bg-cream" >ค้นหา</button>
                </div>
            </div>

            <div className="flex items-center place-content-between gap-[0.8rem] w-[40%] h-full">
                <div className="selector relative w-[30%] h-full">
                    <select className="w-full h-full rounded-md px-[0.5rem] focus:outline-none" name="lesson" id="lesson">
                        <option value="array">Array</option>
                        <option value="string">String</option>
                        <option value="lesson01">Lesson01</option>
                        <option value="lesson02">Lesson02</option>
                        <option value="lesson03">Lesson03</option>
                    </select>
                </div>

                <div className="flex justify-center items-center w-[45%] h-full rounded-md px-[0.5rem] bg-stone01">
                    <div className="flex items-center place-content-between w-[90%] h-[80%]">
                        <p>ความยาก</p>
                        <div className="flex items-center">

                            <svg className="h-full min-h-[19px] max-h-[20px]" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.64383 1.66675L12.1271 6.88341L17.6802 7.72508L13.662 11.7834L14.6103 17.5167L9.64383 14.8084L4.67733 17.5167L5.62563 11.7834L1.60742 7.72508L7.16058 6.88341L9.64383 1.66675Z" fill="#E2AD39" stroke="#E2AD39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <svg className="h-full min-h-[19px] max-h-[20px]" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.64383 1.66675L12.1271 6.88341L17.6802 7.72508L13.662 11.7834L14.6103 17.5167L9.64383 14.8084L4.67733 17.5167L5.62563 11.7834L1.60742 7.72508L7.16058 6.88341L9.64383 1.66675Z" fill="#E2AD39" stroke="#E2AD39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <svg className="h-full min-h-[19px] max-h-[20px]" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.64383 1.66675L12.1271 6.88341L17.6802 7.72508L13.662 11.7834L14.6103 17.5167L9.64383 14.8084L4.67733 17.5167L5.62563 11.7834L1.60742 7.72508L7.16058 6.88341L9.64383 1.66675Z" fill="#E2AD39" stroke="#E2AD39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            
                            <svg className="h-full min-h-[19px] max-h-[20px]" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.0003 1.66675L12.5753 6.88341L18.3337 7.72508L14.167 11.7834L15.1503 17.5167L10.0003 14.8084L4.85033 17.5167L5.83366 11.7834L1.66699 7.72508L7.42533 6.88341L10.0003 1.66675Z" stroke="#E2AD39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <svg className="h-full min-h-[19px] max-h-[20px]" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.0003 1.66675L12.5753 6.88341L18.3337 7.72508L14.167 11.7834L15.1503 17.5167L10.0003 14.8084L4.85033 17.5167L5.83366 11.7834L1.66699 7.72508L7.42533 6.88341L10.0003 1.66675Z" stroke="#E2AD39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                        </div>
                    </div>
                </div>

                <button className="w-[25%] h-full rounded-md px-[0.5rem] bg-cream">
                    สุ่มโจทย์เลย
                </button>

            </div>

        </div>
    );
}

export default SearchBar;