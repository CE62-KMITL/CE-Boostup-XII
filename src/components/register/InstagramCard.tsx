import { InstagramEmbed } from 'react-social-media-embed';

function RegisterFormCard() {
    return (
        <div className='w-full h-full rounded-[2rem] p-[2rem] bg-stone01'>
            <div className="w-full h-full overflow-y-scroll bg-stone01">
                <InstagramEmbed url="https://www.instagram.com/p/C5VDp5-yjNH/?img_index=1"/>
            </div>
        </div>
    )
}

export default RegisterFormCard;