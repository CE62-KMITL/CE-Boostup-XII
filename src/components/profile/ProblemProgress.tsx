import { useEffect, useState } from 'react';

function ProblemProgress({ problemProgress }: {
    problemProgress: string
}): JSX.Element {
    const progressPercentage = Math.floor(parseInt(problemProgress));
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [scaleWidth, setScaleWidth] = useState(0);
    const [radius, setRadius] = useState(0);
    const [strokeWidth, setStrokeWidth] = useState(0);

    const lgWidth = 160;
    const xlWidth = 180;
    const xxlWidth = 200;
    const lgStroke = 12;
    const xlStroke = 16;
    const xxlStroke = 20;

    useEffect(() => {
        const handleResize = () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;
            if (newWidth !== windowWidth || newHeight !== windowHeight) {
                setWindowWidth(newWidth);
                setWindowHeight(newHeight);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
        
    }, [windowWidth, windowHeight]);

    useEffect(() => {
        if (windowWidth >= 1024 && windowWidth < 1280) {
            setScaleWidth(lgWidth);
            setStrokeWidth(lgStroke);
        } else if (windowWidth >= 1280 && windowWidth < 1536) {
            setScaleWidth(xlWidth);
            setStrokeWidth(xlStroke);
        } else if (windowWidth >= 1536) {
            setScaleWidth(xxlWidth);
            setStrokeWidth(xxlStroke);
        }
        setRadius((scaleWidth / 2) - (strokeWidth / 2));
    }, [windowWidth, scaleWidth, strokeWidth]);

    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progressPercentage / 100) * circumference;

    return (
        <div className="relative flex justify-center items-center"
            style={{ width: `${scaleWidth}px`, height: `${scaleWidth}px` }}>
            <div className="absolute flex justify-center items-center">
                <div className="bg-stone-300 rounded-full flex justify-center items-center"
                    style={{ width: `${scaleWidth}px`, height: `${scaleWidth}px`, padding: `${strokeWidth}px` }}>
                    <div className="bg-stone-100 rounded-full flex justify-center items-center"
                        style={{ width: `${scaleWidth - strokeWidth * 2}px`, height: `${scaleWidth - strokeWidth * 2}px` }}>
                        <div className="flex flex-col justify-center items-center">
                            <div className={`text-[${windowWidth >= 1536 ? 16 : windowWidth >= 1280 ? 14 : 12}px] font-medium`}>
                                ทำโจทย์ไปแล้ว
                            </div>
                            <div className={`text-[${windowWidth >= 1536 ? 24 : windowWidth >= 1280 ? 22 : 20}px] font-bold`}>
                                {progressPercentage}%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <svg className="absolute transform -rotate-90" style={{ width: `${scaleWidth}px`, height: `${scaleWidth}px` }} xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stopColor="#097275" />
                        <stop offset="100%" stopColor="#28799C" />
                    </linearGradient>
                </defs>
                <circle
                    className="fill-none"
                    cx="50%"
                    cy="50%"
                    r={radius}
                    strokeLinecap="round"
                    strokeWidth={strokeWidth}
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
