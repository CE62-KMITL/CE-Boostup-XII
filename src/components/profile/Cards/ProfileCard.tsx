import ProfileBackground from "../../../assets/profile-background.png";
import LogOutButton from "../LogoutButton";
import ProblemProgress from "../ProblemProgress";
import ProfilePicture from "../ProfilePicture";
import UserInfo from "../UserInfo";

function ProfileCard({ username, email, house, ranking, point, problem_count, problem_progress }: {
    username: string,
    email: string,
    house: string,
    ranking: string,
    point: string,
    problem_count: string,
    problem_progress: string
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
                <div className="absolute top-[150px] left-[211px]">
                    <ProfilePicture />
                </div>
                <div className="ml-[450px] mt-[33px] self-start">
                    <UserInfo
                        username={username}
                        email={email}
                        house={house}
                    />
                </div>
                <div className="flex items-center place-content-between 
                lg:w-[400px] xl:w-[450px] 2xl:w-[500px] h-full pb-20">
                    <ProblemProgress problem_progress={problem_progress} />
                    <div className='flex flex-col justify-center lg:w-[200px] xl:w-[220px] 2xl:w-[240px] h-full'>
                        <div className='lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-bold'>
                            อันดับที่ {ranking}
                        </div>
                        <div className='lg:text-[12px] xl:text-[14px] 2xl:text-[16px] font-medium'>
                            คะเเนนรวมทั้งหมด {point} คะเเนน <br />
                            ทำผ่านไปเเล้วทั้งหมด {problem_count} ข้อ
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-[33px] left-[598px]">
                    <LogOutButton />
                </div>
            </div>
        </>
    );
}

export default ProfileCard;
