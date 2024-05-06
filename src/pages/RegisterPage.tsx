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
    );
}

export default RegisterPage;