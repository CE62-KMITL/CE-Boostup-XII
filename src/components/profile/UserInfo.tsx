type UserInfoProps = {
    username: string;
    email: string;
    house: string;
}

function UserInfo({username, email, house} : UserInfoProps) {
    return (
        <div className="flex flex-col justify-end 
        lg:gap-[6px] xl:gap-[8px] 2xl:gap-[12px] w-fit h-[50%]">
            <div className="flex items-end 
            lg:gap-[6px] xl:gap-[8px] 2xl:gap-[12px]">
                <span className="text-[32px] font-bold  leading-8">
                    {username}</span>
                <span className="text-[16px] font-medium">
                    {email}</span>
            </div>
            <div className="text-[18px] font-bold">
                {house} 
            </div>
        </div>
    );
}

export default UserInfo