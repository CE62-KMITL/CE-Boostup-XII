function ProblemsTable({ number, title, lesson, level, attempters, score, status }: { 
    number: string, 
    title: string, 
    lesson: string, 
    level: number,
    attempters: number, 
    score: number, 
    status: string 
}) {
    return (
        <div className="grid grid-cols-[repeat(16,minmax(0,1fr))] gap-[0.8rem] w-full h-[6%] min-h-[40px] max-h-[45px] mb-[1rem] rounded-md bg-stone01">
            <div className="flex justify-start items-center col-span-1 px-[0.6rem]">
                {number}
            </div>
            <div className="flex justify-start items-start col-span-4 px-[0.6rem] leading-[2.4rem] overflow-y-auto">
                {title}
            </div>
            <div className="flex justify-start items-start col-span-3 px-[0.6rem] leading-[2.4rem] overflow-y-auto">
                {lesson}
            </div>
            <div className="flex justify-start items-center col-span-3 px-[0.6rem]">
                {Array.from({ length: level }, (_, index) => (
                    <svg key={index} className="h-full min-h-[19px] max-h-[20px]" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.64383 1.66675L12.1271 6.88341L17.6802 7.72508L13.662 11.7834L14.6103 17.5167L9.64383 14.8084L4.67733 17.5167L5.62563 11.7834L1.60742 7.72508L7.16058 6.88341L9.64383 1.66675Z" fill="#E2AD39" stroke="#E2AD39" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                ))}
                {Array.from({ length: 5 - level }, (_, index) => (
                    <svg key={index} className="h-full min-h-[19px] max-h-[20px]" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.78836 1.66675L12.2716 6.88341L17.8248 7.72508L13.8066 11.7834L14.7549 17.5167L9.78836 14.8084L4.82186 17.5167L5.77016 11.7834L1.75195 7.72508L7.30511 6.88341L9.78836 1.66675Z" stroke="#E2AD39" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                ))}
            </div>
            <div className="flex justify-start items-center col-span-2 px-[0.6rem]">
                {score}
            </div>
            <div className="flex justify-start items-center col-span-2 px-[0.6rem]">
                {attempters}
            </div>
            <div className={`flex justify-end items-center col-span-1 px-[0.6rem] ${status === 'pass' ? 'text-pass' : status === 'unpass' ? 'text-unpass' : 'text-empty'}`}>
                {status === 'pass' ? 'ผ่าน' : status === 'unpass' ? 'ไม่ผ่าน' : 'ทำเลย'}
            </div>
        </div>
    );
}

export default ProblemsTable;
