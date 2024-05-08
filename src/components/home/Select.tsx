import { useState } from "react";

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
    
    return (
        <div className="flex space-x-4 w-full h-[45px] mb-[1.6rem]">
            <div className="relative min-w-[120px] h-full">
                <select className="absolute w-full h-full rounded-[8px] px-[16px] focus:outline-none" name="lesson" id="lesson"
                    onClick={handleStatusSelectClick}
                    onBlur={onBLurStatusSelect}
                >
                    <option value="pass">ผ่าน</option>
                    <option value="unpass">ไม่ผ่าน</option>
                    <option value="empty">ทำเลย</option>
                </select>
                <div className="flex justify-center items-center absolute right-0 w-[40px] h-full rounded-[8px] bg-cream cursor-pointer pointer-events-none">
                    <svg className={`w-[14px] h-[8px] transition-all duration-200 ${statusRotation ? 'rotate-180' : ''}`} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L13 1" stroke="#212429" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div className="relative min-w-[156px] h-full">
                <select className="absolute w-full h-full rounded-[8px] px-[16px] focus:outline-none" name="lesson" id="lesson"
                    onClick={handleLessonSelectClick}
                    onBlur={onBLurLessonSelect}
                >
                    <option value="lesson01">Lesson01</option>
                    <option value="lesson02">Lesson02</option>
                    <option value="lesson03">Lesson03</option>
                    <option value="lesson04">Lesson04</option>
                    <option value="lesson05">Lesson05</option>
                </select>
                <div className="flex justify-center items-center absolute right-0 w-[40px] h-full rounded-[8px] bg-cream cursor-pointer pointer-events-none">
                    <svg className={`w-[14px] h-[8px] transition-all duration-200 ${lessonRotation ? 'rotate-180' : ''}`} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L13 1" stroke="#212429" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;