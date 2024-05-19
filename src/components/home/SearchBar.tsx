import { useEffect, useState } from "react";
import Dropdown from "../utils/Dropdown";
import Button from "../utils/OldButton";
import { ProblemTagModelResponse } from "../../types/response.type";
import { CompletionStatus } from "../../enum/problem.enum";
import { store } from "../../store/store";
import { problemTagsService } from "../../services/problemTags.service";
import { setProblemTagState } from "../../store/slices/problemTags.slice";
import { useDispatch } from "react-redux";
import { PaginationRequestDto } from "../../dto/utils.dto";
import { useNavigate } from "react-router-dom";

const isComplete = [
    ["", "สถานะ"],
    ["pass", CompletionStatus.Solved],
    ["unpass", CompletionStatus.Attempted],
    ["empty", CompletionStatus.Unattempted]
]

type SearchBarProps = {
    fetchFunc: (paginationRequest: PaginationRequestDto) => Promise<void>;
}

function SearchBar({ fetchFunc }: SearchBarProps) {
    const dispatch = useDispatch();
    const problemTags = store.getState().problemTags.problemTags;
    const problems = store.getState().problem.problem;
    const navigate = useNavigate();

    const tagList = [["", "บทเรียน"]];

    async function fetchProblemTags() {
        try {
            const response = await problemTagsService.getProblemTags({ page: 1, perPage: 10, sort: "name", search: "", owner: "" });
            dispatch(setProblemTagState(response.data));
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (problemTags) {
            problemTags.map((problemTag: ProblemTagModelResponse) => {
                tagList.push([problemTag.id, problemTag.name]);
            });
        } else
            fetchProblemTags();
    }, [problemTags]);

    const [level, setLevel] = useState<number>(0);
    const [tag, setTag] = useState<string>("");
    const [search, setSearch] = useState<string>("");
    const [completionStatus, setCompletionStatus] = useState<string>("");

    useEffect(() => {
        fetchFunc({ page: 1, perPage: 10, sort: "number", tags: [tag], difficulties: [level] });
    }, [level, tag, completionStatus]);

    async function handleSearch() {
        await fetchFunc({ page: 1, perPage: 10, sort: "number", search: search });
    }

    const recheckLevel = (selectedLevel: number) => {
        if (selectedLevel === level) 
            setLevel(0);
        else 
            setLevel(selectedLevel);
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
                    placeholder="พิมพ์ชื่อโจทย์ หรือเลขข้อ" onChange={(e) => setSearch(e.target.value)} />
                <Button type={1} mode={4} validate={true} text="ตกลง" img="" ClickFunc={handleSearch} />
            </div>
            <Dropdown type={1} values={isComplete} onChange={(v) => setCompletionStatus(v)}></Dropdown>
            <Dropdown type={2} values={tagList} onChange={(v) => setTag(v)}></Dropdown>
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