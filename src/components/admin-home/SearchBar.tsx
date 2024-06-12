import { useEffect, useState } from "react";
import Dropdown from "../utils/Dropdown";
import Button from "../utils/OldButton";
import { ProblemTagModelResponse } from "../../types/response.type";
import { PublicationStatus } from "../../enum/problem.enum";
import { useNavigate } from "react-router-dom";
import { usePaginationRequestStore } from "../../store/zustand/pagination.zustand";
import { DropdownType } from "../../types/dropdown.type";
import { useAppSelector } from "../../store/hook";
import { useUser } from "../../hooks/user.hook";

const isPublicate: DropdownType[] = [
    { value: PublicationStatus.Draft, name: "Draft" },
    { value: PublicationStatus.AwaitingApproval, name: "Awaiting Approval" },
    { value: PublicationStatus.Approved, name: "Approved" },
    { value: PublicationStatus.Rejected, name: "Rejected" },
    { value: PublicationStatus.Published, name: "Published" },
    { value: PublicationStatus.Archived, name: "Archived" },
];

type SearchBarProps = {
    resetPage: () => void;
};

function SearchBar({ resetPage }: SearchBarProps) {
    const { setPaginationRequest, paginationRequest } = usePaginationRequestStore();
    const problemTags = useAppSelector((state) => state.problemTags.problemTags);
    const navigate = useNavigate();
    const [tagList] = useState<DropdownType[]>([]);
    const user = useUser().user;

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
    const [publicationStatus, setPublicationStatus] = useState<PublicationStatus>();
    const [selfProblem, setSelfProblem] = useState<boolean>(false);

    useEffect(() => {
        setPaginationRequest({
            ...paginationRequest,
            difficulties: level.toString() === "0" ? undefined : level.toString(),
            tags: tag,
            publicationStatus: publicationStatus ? publicationStatus : undefined,
            owner: selfProblem ? user?.id : undefined,
        });
        resetPage();
    }, [level, tag, publicationStatus, selfProblem]);

    function handelSearch() {
        setPaginationRequest({
            ...paginationRequest,
            search: search,
        });
        resetPage();
    }

    const recheckLevel = (selectedLevel: number) => {
        setLevel((prev) => (prev === selectedLevel ? 0 : selectedLevel));
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

    return (
        <div className="flex space-x-4 w-full h-[40px] mb-[1.6rem]">
            <div className="relative w-[calc(100%-630px)] h-full flex">
                <input type="text" className="search-box h-full w-full rounded-lg px-[16px] text-stone04 focus:outline-none"
                    placeholder="พิมพ์ชื่อโจทย์ หรือเลขข้อ" onChange={(e) => setSearch(e.target.value)} />
                <Button type={1} mode={4} validate={true} text="ค้นหา" img="" ClickFunc={handelSearch} />
            </div>
            <Dropdown type={2} title="บทเรียน" values={tagList} onChange={(v) => setTag(v)} />
            <div className="flex items-center w-[277px] h-full rounded-[8px] px-[16px] bg-stone01">
                <div className="flex items-center place-content-between w-full">
                    <p className="text-nowrap">ความยาก</p>
                    <div className="flex items-center space-x-[4px]">
                        {renderStars()}
                    </div>
                </div>
            </div>
            <Dropdown type={2} values={isPublicate} title="สถานะ" onChange={(v) => setPublicationStatus(v as PublicationStatus)} />
            <div className="flex justify-center items-center w-[170px] h-100% bg-white rounded-lg">
                <p>โจทย์ของฉัน</p>
                <div className="custom-checkbox">
                    <input type="checkbox" id="customCheckbox" onChange={(e) => setSelfProblem(e.target.checked)} />
                    <label htmlFor="customCheckbox"></label>
                </div>
            </div>
            <Button type={1} mode={5} validate={true} text="สร้างโจทย์เลย" ClickFunc={() => navigate("/create-problem")} />
        </div>
    );
}

export default SearchBar;
