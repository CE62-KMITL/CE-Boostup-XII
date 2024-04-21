import LoginBackground from "./LoginCardComponents/LoginBackground"
import LoginForm from "./LoginCardComponents/LoginForm"
import LogoIcon from "./LoginCardComponents/LogoIcon"

function LoginCard() {
    
    return (
        <div className="w-[482px] h-[704px]
        AbsoluteCentre relative">
            <div className="absolute top-0 left-[50%] translate-x-[-50%] z-10">
                <LogoIcon />
            </div>
            <div 
            className="w-full h-[527px] 
            absolute translate-x-[-50%] bottom-0 left-[50%] z-0">
                <LoginBackground />
                <LoginForm />
            </div>
        </div>
    )
}

export default LoginCard