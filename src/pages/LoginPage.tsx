import Background from "../components/utils/Background";
import LogoIcon from "../components/login/LoginCard/LogoIcon";
import LoginBackground from "../components/login/LoginCard/LoginBackground";
import LoginForm from "../components/login/LoginCard/LoginForm";

function LoginPage() {
    return (
        <>
            <Background/>
            <div className="flex justify-center items-center w-screen h-screen">
                <div className="flex flex-col items-center place-content-between relative
                w-full h-full min-w-[400px] max-w-[480px] min-h-[600px] max-h-[700px]">
                    <LogoIcon/>
                    <div className="absolute -translate-x-1/2 left-1/2 bottom-0 w-full h-full max-h-[525px]">
                        <div className="relative w-full h-full">
                            <LoginBackground/>
                            <LoginForm/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;