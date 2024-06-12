type ProgressBarProps = {
    progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
    return (
        <div className="flex flex-col items-center space-y-1">
            <div className="text-[16px] self-end text-stone04">{progress}%</div>
            <div className="h-3 w-[296px] bg-stone02 border-2 border-white rounded-lg relative overflow-hidden">
                <div className={`bg-[#E2AD39] h-full absolute rounded-lg`} style={{ 'width': `${progress}%` }} />
            </div>
        </div>
    );
}