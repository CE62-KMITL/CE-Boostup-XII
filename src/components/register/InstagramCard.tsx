import { InstagramEmbed } from 'react-social-media-embed';

function RegisterFormCard() {
    return (
        <div className="border-2 border-slate-50 w-full h-full rounded-[30px] xl:p-[30px] 2xl:p-[36px] bg-stone01">
            <div className="w-full h-full overflow-y-scroll hide-scrollbar">
                <InstagramEmbed url="https://www.instagram.com/p/C4inBvIPfua/"/>
            </div>
        </div>
    )
}

export default RegisterFormCard;