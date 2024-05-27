import { useState } from "react";
import Dropdown from "../utils/Dropdown";
import Button from "../utils/Button";

const isComplete = [
    ["", "สถานะ"],
    ["pass", "ผ่าน"],
    ["unpass", "ไม่ผ่าน"],
    ["empty", "ทำเลย"]
]
const lessonList = [
    ["", "บทเรียน"],
    ["lesson01", "Lesson01"],
    ["lesson02", "Lesson02"],
    ["lesson03", "Lesson03"],
    ["lesson04", "Lesson04"],
    ["lesson05", "Lesson05"]
]


function SearchBar() {
    const [statusRotation, setStatusRotation] = useState(false);
    const handleStatusSelectClick = () => {
        setStatusRotation(!statusRotation);
    };
    const onBLurStatusSelect = () => {
        setStatusRotation(false);
    }
    const [lessonRotation, setLessonRotation] = useState(false);
    const handleLessonSelectClick = () => {
        setLessonRotation(!lessonRotation);
    };
    const onBLurLessonSelect = () => {
        setLessonRotation(false);
    }

    const [level, setLevel] = useState(0);
    const selectLevel = (selectedLevel: number) => {
        setLevel(selectedLevel);
    };
    const recheckLevel = (selectedLevel: number) => {
        if (selectedLevel === level) {
            setLevel(0);
        }
        else {
            setLevel(selectedLevel);
        }
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
            <div className="relative w-[calc(100%-630px)] h-full flex" >
                <input type="text" className="search-box h-full w-full rounded-lg px-[16px] text-stone04 focus:outline-none"
                    placeholder="พิมพ์ชื่อโจทย์ หรือเลขข้อ" />
                <Button type={1} mode={4} validate={true} text="ตกลง" img="" ClickFunc={() => window.location.href = "https://google.com/"} />
            </div>
            <Dropdown type="1" data={isComplete}></Dropdown>
            <Dropdown type="2" data={lessonList}></Dropdown>
            <div className="flex items-center w-[224px] h-full rounded-[8px] px-[16px] bg-stone01">
                <div className="flex items-center place-content-between w-full">
                    <p>ความยาก</p>
                    <div className="flex items-center space-x-[4px]">
                        {renderStars()}
                    </div>
                </div>
            </div>
            <Button type={1} mode={0} validate={true} text="สุ่มโจทย์" img="" ClickFunc={() => window.location.href = "https://google.com/"} />
        </div>
    );
}

export default SearchBar;