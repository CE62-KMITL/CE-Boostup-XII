function SearchBar() {
    return (
        <div>
            <div className="h-[42px] w-[779px] flex relative mt-[36px] mb-[36px]">
                <input type="text" className="absolute w-full h-full rounded-md focus:outline-none text-stone04 pl-[10px]" placeholder="พิมพ์เนื้อหาบทเรียน" />
                <button className="absolute right-0 w-[20%] min-w-[125px] max-w-[100px] h-full rounded-md bg-cream" >
                    ค้นหา
                </button>
            </div>
        </div>
    );
}

export default SearchBar