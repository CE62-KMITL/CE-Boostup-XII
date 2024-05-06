import { InstagramEmbed } from 'react-social-media-embed';

import InstagramCard from "../components/register/InstagramCard";
import RegisterFormCard from "../components/register/RegisterFormCard";

function RegisterPage() {
    return (
        <div className="flex justify-center items-center default-background">
            <div className="flex gap-4 
            xl:w-[1024px] xl:h-[664px] 2xl:w-[1345px] 2xl:h-[864px]">
                <InstagramCard />
                <RegisterFormCard />
            </div>
        </div>

        // <div className="flex justify-center items-center default-background w-screen h-screen px-[12rem] py-[3rem]">
        //     <div className="flex gap-[1.25rem] w-full h-full m-[2rem] 
        //     min-w-[1200px] max-w-[1400px] min-h-[600px] max-h-[900px] ">
        //         <InstagramCard  />
        //         <RegisterFormCard />
        //     </div>
        // </div>
    );
}

export default RegisterPage;