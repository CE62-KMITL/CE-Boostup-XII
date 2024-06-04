import MainIcon from "../../../assets/MainIcon.svg";

function LogoIcon() {
    return (
        <div 
        className="flex justify-center items-center absolute -translate-x-1/2 top-0 left-1/2
        w-[225px] h-[225px] rounded-full bg-stone01">
            <img src={MainIcon} 
            className="w-[200px] h-[200px] rounded-full overflow-hidden" alt="" />
        </div>
    );
}

export default LogoIcon