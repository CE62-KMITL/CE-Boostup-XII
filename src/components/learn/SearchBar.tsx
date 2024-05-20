import Button from "../utils/Button";

type SearchBarProps = {
    setSearch: React.Dispatch<React.SetStateAction<string>>
    refetch: () => void
}

function SearchBar({ setSearch, refetch }: SearchBarProps) {
    return (
        <div>
            <div className="h-[42px] w-[779px] flex relative mt-[36px] mb-[36px]">
                <input type="text" className="absolute w-full h-full rounded-md focus:outline-none text-stone04 pl-[10px]" placeholder="พิมพ์เนื้อหาบทเรียน" onChange={(e) => setSearch(e.target.value)} />
                <Button text="ค้นหา" ClickFunc={refetch} className="absolute right-0 w-[20%] min-w-[125px] max-w-[100px] h-full rounded-md transition ease-in-out duration-200 bg-cream hover:bg-cream2" />
            </div>
        </div>
    );
}

export default SearchBar