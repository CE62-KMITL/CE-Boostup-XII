import Background from "../components/utils/Background";
import LogoIcon from "../components/login/LoginCard/LogoIcon";
import LoginBackground from "../components/login/LoginCard/LoginBackground";
import LoginForm from "../components/login/LoginCard/LoginForm";
import ForgotPasswordPopUp from "../components/login/ForgotPasswordPopUp";
import RecognizedPopUp from "../components/login/RecognizedPopUp";
import CreateAccountPopUp from "../components/login/CreateAccountPopUp";
import LoadingPage from "./LoadingPage";
import { useAuth } from "../components/hooks/auth.hook";
import { useState } from "react";

export default function LoginPage() {
    const [isForgotPasswordPopUp, setIsForgotPasswordPopUp] = useState<boolean>(false);
    const [isRecognizedPopUp, setIsRecognizedPopUp] = useState<boolean>(false);
    const [isCreateAccountPopUp, setIsCreateAccountPopUp] = useState<boolean>(false);
    const { loginMutation } = useAuth();

    if (loginMutation.isLoading) 
        return <LoadingPage />;

    return (
        <>
            {isForgotPasswordPopUp && <ForgotPasswordPopUp setIsRecognizedPopUp={setIsRecognizedPopUp} setShowForgotPassword={setIsForgotPasswordPopUp} />}
            {isRecognizedPopUp && <RecognizedPopUp setIsRecognizedPopUp={setIsRecognizedPopUp} />}
            {isCreateAccountPopUp && <CreateAccountPopUp setShowCreateAccount={setIsCreateAccountPopUp} />}
            <Background />
            <div className="flex justify-center items-center w-screen h-screen">
                <div className="flex flex-col items-center place-content-between relative
                w-full h-full min-w-[400px] max-w-[482px] min-h-[600px] max-h-[700px]">
                    <LogoIcon />
                    <div className="absolute -translate-x-1/2 left-1/2 bottom-0 w-full h-full max-h-[525px]">
                        <LoginBackground />
                        <LoginForm mutation={loginMutation} setShowForgotPassword={setIsForgotPasswordPopUp} setShowCreateAccount={setIsCreateAccountPopUp} />
                    </div>
                </div>
            </div>
        </>
    );
}