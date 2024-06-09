import { isEmpty } from "lodash";
import { useProfileComponentsStore } from "../../store/zustand/profile-components.zustand";

function UserInfo({ username, email, house }: {
    username: string,
    email: string,
    house: string,
}) {
    const { setComponents } = useProfileComponentsStore();
    
    return (
        <div className={`flex flex-col justify-end 
        lg:gap-[6px] xl:gap-[8px] 2xl:gap-[12px] w-fit h-[50%]`}>
            <div className={`flex items-end
            lg:gap-[6px] xl:gap-[8px] 2xl:gap-[12px] ${isEmpty(house) ? 'mb-7' : ''}`}>
                <span className="text-[32px] font-bold leading-8 text-nowrap max-w-[255px] truncate">
                    {username}</span>
                <span className="text-[16px] font-medium">
                    {email}</span>
                <button onClick={() => setComponents(1)} className="flex items-center bg-accent  hover:bg-accent02 w-[149px] h-[42px] ml-[118px] rounded-lg drop-shadow-md">
                    <div className="text-stone01 ml-[16px]">แก้ไขโปรไฟล์</div>
                    <div className="ml-[8px]">
                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 2.505c-.897 0-1.794.34-2.474 1.02L4.458 14.592a1.75 1.75 0 0 0-.445.758L2.53 20.544a.75.75 0 0 0 .926.927l5.196-1.484c.285-.082.546-.234.757-.445L20.475 8.475a3.51 3.51 0 0 0 0-4.95A3.488 3.488 0 0 0 18 2.505Zm0 1.491c.51 0 1.02.197 1.413.59h.001c.788.787.788 2.04 0 2.828l-.97.97-2.827-2.828.97-.97c.392-.393.903-.59 1.413-.59Zm-3.444 2.62 2.828 2.828-9.037 9.037a.252.252 0 0 1-.108.064l-3.897 1.113 1.113-3.897v-.001a.246.246 0 0 1 .064-.108l9.037-9.036Z" fill="#fff" /></svg>
                    </div>
                </button>
            </div>
            {!isEmpty(house) && (
                <div className="text-[18px] font-bold mt-[2px]">
                    {house}
                </div>
            )}
        </div>
    );
}

export default UserInfo;
