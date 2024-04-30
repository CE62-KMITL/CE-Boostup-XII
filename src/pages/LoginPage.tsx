import LogoIcon from "../components/login/LoginCard/LogoIcon";
import LoginBackground from "../components/login/LoginCard/LoginBackground";
import LoginForm from "../components/login/LoginCard/LoginForm";

function LoginPage() {
    return (
        <div className="flex justify-center items-center default-background w-screen h-screen">
            <div className="relative w-full h-full min-w-[400px] max-w-[480px] min-h-[600px] max-h-[700px]">
                <LogoIcon/>
                <div className="absolute bottom-0 w-full h-[530px]">
                    <div className="relative w-full h-full">
                        <div className="absolute w-full h-full">
                            <LoginBackground/>
                        </div>
                        <div className="absolute w-full h-full">
                            <LoginForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;