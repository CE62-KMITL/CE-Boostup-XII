import ProfileBackground from "../../../assets/profile-background.png";
import LogOutButton from "../LogoutButton";
import ProblemProgress from "../ProblemProgress";
import ProfilePicture from "../ProfilePicture";
import UserInfo from "../UserInfo";

function ProfileCard({ username, email, house, ranking, point, problemCount, problemProgress }: {
    username: string,
    email: string,
    house: string,
    ranking: string,
    point: string,
    problemCount: string,
    problemProgress: string
}) {
    return (
        <>
            <div className="relative flex flex-col mt-[9.7vh] w-[1353px] h-[84.8vh] min-h-[600px] max-h-[900px] bg-stone01 rounded-b-[10px] items-center">
                <div id="profile-background" className="w-full h-[40%] min-h-[250px] max-h-[325px]"
                    style={{
                        backgroundImage: `url(${ProfileBackground})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }}>
                </div>
                <div className="-translate-y-1/2 flex items-end place-content-between 
                lg:w-[72.5%] xl:w-[70%] 2xl:w-[67.5%] h-[100%] min-h-[120px] max-h-[200px] mt-[1%]">
                    <ProfilePicture />
                    <UserInfo
                        username={username}
                        email={email}
                        house={house}
                    />
                </div>
                <div className="flex items-center place-content-between absolute bottom-1/4 translate-y-[45%]
                lg:w-[400px] xl:w-[450px] 2xl:w-[500px] h-fit">
                    <ProblemProgress problemProgress={problemProgress} />
                    <div className='flex flex-col justify-center lg:w-[200px] xl:w-[220px] 2xl:w-[240px] h-full'>
                        <div className='lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-bold'>
                            อันดับที่ {ranking}
                        </div>
                        <div className='lg:text-[12px] xl:text-[14px] 2xl:text-[16px] font-medium'>
                            คะเเนนรวมทั้งหมด {point} คะเเนน <br />
                            ทำผ่านไปเเล้วทั้งหมด {problemCount} ข้อ
                        </div>
                    </div>
                </div>
                <div className='absolute -translate-y-1/2 top-[93%]'>
                    <LogOutButton />
                </div>
            </div>
        </>
    );
}

export default ProfileCard;