import InstagramCard from "../components/register/InstagramCard";
import RegisterFormCard from "../components/register/RegisterFormCard";

function RegisterPage() {
    return (
        <div className="flex justify-center items-center default-background w-screen h-screen px-[12rem] py-[3rem]">
            <div className="flex gap-[1.25rem] w-full h-full m-[2rem] 
            min-w-[1200px] max-w-[1400px] min-h-[600px] max-h-[900px] ">
                <InstagramCard  />
                <RegisterFormCard />
            </div>
        </div>
    );
}

export default RegisterPage;