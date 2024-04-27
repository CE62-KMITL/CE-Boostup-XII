import InstagramCard from "../components/register/InstagramCard";
import RegisterFormCard from "../components/register/RegisterFormCard";

function RegisterPage() {
    return (
        <div className="flex justify-center items-center default-background w-screen h-screen p-[3.2rem]">
            <div className="flex gap-[2rem] w-full h-full min-w-[960px] max-w-[1390px] min-h-[640px] max-h-[880px] m-8 border-4 border-red-600">
                <InstagramCard  />
                <RegisterFormCard />
            </div>
        </div>
    );
}

export default RegisterPage;