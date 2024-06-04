import { useState, useEffect } from 'react';
import ProfileBackground from "../../assets/profile-background.png";
import ProfilePicture from "./ProfilePicture";
import UserInfo from "./UserInfo";
import EditProfileButton from './EditProfileButton';
import ProblemProgress from './ProblemProgress';
import LogOutButton from './LogoutButton';

type ProfileCardProps = {
    data: {
        username: string;
        email: string;
        house: string;
        profile_icon: string;
        finished_percentage: number;
        ranking: number;
        total_points: number;
        total_problems: number;
    }
}

function ProfileCard({data} : ProfileCardProps) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            const newWidth = window.innerWidth;
            if (newWidth !== windowWidth) {
                setWindowWidth(newWidth);
                window.location.reload();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
        
    }, [windowWidth]);

    useEffect(() => {
        const cardDom = document.getElementById("card");
        if (cardDom) {
            const heightOfCard = cardDom.offsetHeight;
            cardDom.style.width = `${heightOfCard * 1.624}px`;
        }
        
        const backgroundDom = document.getElementById("profile-background");
        const spaceDom = document.getElementById("profile-space");
        if (backgroundDom && spaceDom) {
            const heightOfBackground = backgroundDom.offsetHeight;
            spaceDom.style.height = `calc(100% - ${heightOfBackground}px)`;
        }

        console.log('Window width:', windowWidth);

    }, []);

    return (
        <div id="card" className="flex flex-col
        min-w-[600px] max-w-[1320px] h-full min-h-[640px] max-h-[830px] 
        rounded-[10px] overflow-y-auto">
            <div id="profile-background" className="w-full h-[40%] min-h-[250px] max-h-[325px]"
                style={{ 
                    backgroundImage: `url(${ProfileBackground})`, 
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}>
            </div>
            <div id="profile-space" className='relative flex flex-col items-center w-full bg-stone01'>
                <div className="-translate-y-1/2 flex items-end place-content-between 
                lg:w-[72.5%] xl:w-[70%] 2xl:w-[67.5%] h-[40%] min-h-[120px] max-h-[200px]">
                    <ProfilePicture
                        profile_icon={data.profile_icon}
                    />
                    <UserInfo 
                        username={data.username} 
                        email={data.email} 
                        house={data.house}
                    />
                    <EditProfileButton/>
                </div>
                <div className='absolute -translate-y-1/2 top-1/2 flex items-center place-content-between 
                lg:w-[400px] xl:w-[450px] 2xl:w-[500px] h-fit'>
                    <ProblemProgress
                        finished_percentage={data.finished_percentage}
                    />
                    <div className='flex flex-col justify-center lg:w-[200px] xl:w-[220px] 2xl:w-[240px] h-full'>
                        <div className='lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-bold'>
                            อันดับที่ {data.ranking}
                        </div>
                        <div className='lg:text-[12px] xl:text-[14px] 2xl:text-[16px] font-medium'>
                            คะเเนนนรวมทั้งหมด {data.total_points} คะเเนน <br/>
                            ทำผ่านไปเเล้วทั้งหมด {data.total_problems} ข้อ
                        </div>
                    </div>
                </div>
                <div className='absolute -translate-y-1/2 top-[90%]'>
                    <LogOutButton/>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
