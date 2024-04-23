import LoginBackground from "./LoginCardComponents/LoginBackground"
import LoginForm from "./LoginCardComponents/LoginForm"
import LogoIcon from "./LoginCardComponents/LogoIcon"

function LoginCard() {
    
    return (
        <div className="centre-absolute w-[482px] h-[704px] relative">
            <div className="absolute translate-x-[-50%] top-0 left-[50%] z-10">
                <LogoIcon />
            </div>
            <div className="w-full h-[527px] absolute translate-x-[-50%] bottom-0 left-[50%] z-0">
                <LoginBackground />
                <LoginForm />
            </div>
        </div>
    );
}

export default LoginCard;