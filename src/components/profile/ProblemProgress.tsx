import { useEffect, useState } from 'react';

function ProblemProgress({ranking, point, problem_count, problem_progress}: {
    ranking: string,
    point: string,
    problem_count: string,
    problem_progress: string
}): JSX.Element {
    const [percentage, setPercentage] = useState<number>(parseFloat(problem_progress));

    useEffect(() => {
        const numberElement = document.getElementById('number');
        if (numberElement) {
            const value = parseInt(numberElement.innerText.replace('%', ''), 10);
            setPercentage(value);
        }
    }, []);

    const circumference: number = 2 * Math.PI * 90;
    const strokeDashoffset: number = circumference - circumference * (percentage / 100);

    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--stroke-dashoffset', `${strokeDashoffset}`);
    }, [strokeDashoffset]);

    return (
        <div className="flex">
            <div className="relative w-[200px] h-[200px] rounded-full p-[20px]">
                    <div className="flex flex-col justify-center items-center w-[160px] h-[160px] rounded-full ">
                        <div className='font-medium'>ทำโจทย์ไปแล้ว</div>
                        <div  className="font-bold text-[24px]" id="number">
                            {percentage}%
                        </div>
                    </div>
                
                <svg className="progress-bar-bg absolute top-0 left-0 rotate-90" xmlns="http://www.w3.org/2000/svg" version="1.1" width="200px" height="200px">
                    <circle 
                        cx="100"
                        cy="100"
                        r="90"
                        strokeLinecap="round"
                    />
                </svg>
                <svg className="progress-bar absolute top-0 left-0 " xmlns="http://www.w3.org/2000/svg" version="1.1" width="200px" height="200px">
                    <circle 
                        cx="100"
                        cy="100"
                        r="90"
                        strokeLinecap="round"
                    />
                </svg>
                
            </div>

            <div className="ml-[72px] mt-[40px]">
                <div className="text-[24px] font-bold">อันดับที่ {ranking} </div>
                <div className="text-[16px] mt-[15px] font-medium">คะเเนนนรวมทั้งหมด {point} คะเเนน</div>
                <div className="text-[16px] font-medium">ทำผ่านไปเเล้วทั้งหมด {problem_count} ข้อ</div>
            </div>
        </div>
    );
}

export default ProblemProgress;
