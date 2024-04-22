import FormCard from './RegisterCardComponents.tsx/FormCard'
import InstagramCard from "./RegisterCardComponents.tsx/InstagramCard";

function RegisterCard() {
    return (
        <div className="w-full h-full relative border-2 border-red-600">
            <div className="centre-absolute flex gap-[24px]
            border-2 border-blue-600">
                <InstagramCard />
                <FormCard />
            </div>
        </div>
    );
}

export default RegisterCard;