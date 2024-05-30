import { useState, useEffect } from "react"; 

type ProblemProgressProps = {
    finished_percentage: number;
}

function ProblemProgress({finished_percentage}: ProblemProgressProps) {
    const progressPercentage = Math.floor(finished_percentage);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowState, setWindowState] = useState('');
    const [scaleWidth, setScaleWidth] = useState(0);
    const [radius, setRadius] = useState(0);
    const [strokeWidth, setStrokeWidth] = useState(0);
    const [innerSpace, setInnerSpace] = useState(0);

    const lgWidth = 160;
    const xlWidth = 180;
    const xxlWidth = 200;
    const lgStroke = 12;
    const xlStroke = 16;
    const xxlStroke = 20;

    useEffect(() => {
        const handleResize = () => {
            const newWidth = window.innerWidth;
            if (newWidth !== windowWidth) {
                setWindowWidth(newWidth);
                window.location.reload();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
        
    }, [windowWidth]);

    useEffect(() => {
        if (windowWidth >= 1024 && windowWidth < 1280) {
            setWindowState('lg-screen');
            setScaleWidth(lgWidth);
            setRadius((lgWidth / 2) - (lgStroke / 2));
            setStrokeWidth(lgStroke);
            setInnerSpace(lgStroke * 2);
        } else if (windowWidth >= 1280 && windowWidth < 1536) {
            setWindowState('xl-screen');
            setScaleWidth(xlWidth);
            setRadius((xlWidth / 2) - (xlStroke / 2));
            setStrokeWidth(xlStroke);
            setInnerSpace(xlStroke * 2);
        } else if (windowWidth >= 1536) {
            setWindowState('2xl-screen');
            setScaleWidth(xxlWidth);
            setRadius((xxlWidth / 2) - (xxlStroke / 2));
            setStrokeWidth(xxlStroke);
            setInnerSpace(xxlStroke * 2);
        }
    }, [windowWidth]);

    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progressPercentage / 100) * circumference;

    return (
        <div className={`relative flex justify-center items-center w-[${scaleWidth}px] h-[${scaleWidth}px]`}>
            <div className="absolute flex justify-center items-center">
                <div className={`bg-stone-300 rounded-full flex justify-center items-center w-[${scaleWidth}px] h-[${scaleWidth}px] p-[${strokeWidth}px]`}>
                    <div className={`bg-stone-100 rounded-full flex justify-center items-center w-[${scaleWidth - innerSpace}px] h-[${scaleWidth - innerSpace}px]`}>
                        <div className="flex flex-col justify-center items-center">
                            <div className={`
                                ${windowState === 'lg-screen' ? 'text-[12px] font-medium leading-2' : ''}
                                ${windowState === 'xl-screen' ? 'text-[14px] font-medium leading-4' : ''}
                                ${windowState === '2xl-screen' ? 'text-[16px] font-medium leading-6' : ''}
                            `}>
                                ทำโจทย์ไปแล้ว
                            </div>
                            <div className={`
                                ${windowState === 'lg-screen' ? 'text-[20px] font-bold leading-4' : ''}
                                ${windowState === 'xl-screen' ? 'text-[22px] font-bold leading-6' : ''}
                                ${windowState === '2xl-screen' ? 'text-[24px] font-bold leading-8' : ''}
                            `}>
                                {progressPercentage}%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <svg className={`absolute transform -rotate-90 w-[${scaleWidth}px] h-[${scaleWidth}px]`} 
            xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stopColor="#097275" />
                        <stop offset="100%" stopColor="#28799C" />
                    </linearGradient>
                </defs>
                <circle
                    className={`fill-none stroke-[${strokeWidth}px]`}
                    cx="50%"
                    cy="50%"
                    r={radius}
                    strokeLinecap="round"
                    style={{
                        stroke: 'url(#GradientColor)',
                        strokeDasharray: circumference,
                        strokeDashoffset: offset,
                        transition: 'stroke-dashoffset 0.6s ease-in-out',
                    }}
                />
            </svg>
        </div>
    );
}

export default ProblemProgress;
