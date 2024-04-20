import LogoIcon from "./LogoIcon"

function LoginCard() {
    return (
        <div className="w-[482px] h-[704px] relative AbsoluteCentre">
            <div className="absolute translate-x-[-50%] top-0 left-[50%] z-10">
                <LogoIcon />
            </div>
            <div 
            className="w-full h-[527px] absolute 
            translate-x-[-50%] bottom-0 left-[50%] z-0">
                <div className="bg-stone01 w-[124px] h-full 
                absolute left-0 rounded-tl-[20px] rounded-tr-[10px] 
                rounded-bl-[20px] rounded-br-[0px]"></div>
                <div className="bg-stone01 w-[124px] h-full 
                absolute right-0 rounded-tl-[10px] rounded-tr-[20px] 
                rounded-bl-[0px] rounded-br-[20px]"></div>
                <div className="bg-stone01 w-full h-[460px] rounded-[20px] 
                absolute left-0 bottom-0"></div>
                <div className="center-above-holder">
                    <div className="curved-corner-bottomleft"></div>
                    <div className="curved-corner-bottomright"></div>
                </div>
            </div>
        </div>
    )
}

export default LoginCard