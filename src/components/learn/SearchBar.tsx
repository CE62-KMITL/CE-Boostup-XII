import Button from "../utils/Button";
import { useLearn } from "../../hooks/learn.hook";
import { useState } from "react";

export default function SearchBar() {
    const { searchLearn } = useLearn();
    const [search, setSearch] = useState("");

    return (
        <div>
            <div className="h-[42px] w-[779px] flex relative mt-[36px] mb-[36px] md:max-xl:ml-20">
                <input type="text" className="absolute w-full h-full rounded-md focus:outline-none text-stone04 pl-[10px]" placeholder="พิมพ์เนื้อหาบทเรียน" onChange={(e) => setSearch(e.target.value)} />
                <Button ClickFunc={() => searchLearn(search)} text="ค้นหา" className="absolute right-0 w-[20%] min-w-[125px] max-w-[100px] h-full rounded-md transition ease-in-out duration-200 bg-cream hover:bg-cream2" />
            </div>
        </div>
    );
}