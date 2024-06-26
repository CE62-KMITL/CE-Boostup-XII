import { useEffect, useState } from "react";
import Dropdown from "../utils/Dropdown";
import Button from "../utils/OldButton";
import { ProblemTagModelResponse } from "../../types/response.type";
import { CompletionStatus } from "../../enum/problem.enum";
import { useNavigate } from "react-router-dom";
import { usePaginationRequestStore } from "../../store/zustand/pagination.zustand";
import { DropdownType } from "../../types/dropdown.type";
import { useProblemsStore } from "../../store/zustand/problems.zustand";
import { useAppSelector } from "../../store/hook";

const isComplete: DropdownType[] = [
    { value: CompletionStatus.Solved, name: "ผ่าน" },
    { value: CompletionStatus.Attempted, name: "ไม่ผ่าน" },
    { value: CompletionStatus.Unattempted, name: "ทำเลย" },
]

type SearchBarProps = {
    resetPage: () => void;
};

function SearchBar({ resetPage }: SearchBarProps) {
    const { setPaginationRequest, paginationRequest } = usePaginationRequestStore();
    const problemTags = useAppSelector((state) => state.problemTags.problemTags);
    const { problems } = useProblemsStore();
    const navigate = useNavigate();
    const [tagList] = useState<DropdownType[]>([]);

    useEffect(() => {
        if (problemTags && tagList.length === 0) {
            problemTags.map((problemTag: ProblemTagModelResponse) => {
                tagList.push({ value: problemTag.id, name: problemTag.name });
            });
        }
    }, [problemTags]);

    const [level, setLevel] = useState<number>(0);
    const [tag, setTag] = useState<string>();
    const [search, setSearch] = useState<string>();
    const [completionStatus, setCompletionStatus] = useState<CompletionStatus>();

    useEffect(() => {
        setPaginationRequest({
            ...paginationRequest,
            difficulties: level.toString() === "0" ? undefined : level.toString(),
            tags: tag,
            completionStatus: completionStatus as string != "" ? completionStatus : undefined
        });
        resetPage();
    }, [level, tag, completionStatus]);

    function handelSearch() {
        setPaginationRequest({
            ...paginationRequest,
            search: search
        });
        resetPage();
    }

    const recheckLevel = (selectedLevel: number) => {
        setLevel((prev) => prev === selectedLevel ? 0 : selectedLevel);
    };

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < level; i++) {
            stars.push(
                <svg key={i} onClick={() => recheckLevel(i + 1)} className="w-[20px] h-[20px] cursor-pointer" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.64371 1.6665L12.127 6.88317L17.6801 7.72484L13.6619 11.7832L14.6102 17.5165L9.64371 14.8082L4.67721 17.5165L5.6255 11.7832L1.6073 7.72484L7.16046 6.88317L9.64371 1.6665Z" fill="#E2AD39" stroke="#E2AD39" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        }
        for (let j = 0; j < 5 - level; j++) {
            stars.push(
                <svg key={j + level} onClick={() => recheckLevel(j + level + 1)} className="w-[20px] h-[20px] cursor-pointer" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0003 1.66675L12.5753 6.88341L18.3337 7.72508L14.167 11.7834L15.1503 17.5167L10.0003 14.8084L4.85033 17.5167L5.83366 11.7834L1.66699 7.72508L7.42533 6.88341L10.0003 1.66675Z" stroke="#E2AD39" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        }
        return stars;
    };

    function handleRandom() {
        navigate(`/solve/${problems?.[Math.floor(Math.random() * problems.length)].id}`);
    }

    return (
        <div className="flex space-x-4 w-full h-[40px] mb-[1.6rem]">
            <div className="relative w-[calc(100%-630px)] h-full flex" >
                <input type="text" className="search-box h-full w-full rounded-lg px-[16px] text-stone04 focus:outline-none"
                    placeholder="พิมพ์ชื่อโจทย์" onChange={(e) => setSearch(e.target.value)} />
                <Button type={1} mode={4} validate={true} text="ตกลง" img="" ClickFunc={handelSearch} />
            </div>
            <Dropdown type={1} values={isComplete} title="สถานะ" onChange={(v) => setCompletionStatus(v as CompletionStatus)} />
            <Dropdown type={2} title="บทเรียน" values={tagList} onChange={(v) => setTag(v)} />
            <div className="flex items-center w-[224px] h-full rounded-[8px] px-[16px] bg-stone01">
                <div className="flex items-center place-content-between w-full">
                    <p>ความยาก</p>
                    <div className="flex items-center space-x-[4px]">
                        {renderStars()}
                    </div>
                </div>
            </div>
            <Button type={1} mode={0} validate={true} text="สุ่มโจทย์" img="" ClickFunc={handleRandom} />
        </div>
    );
}

export default SearchBar;
