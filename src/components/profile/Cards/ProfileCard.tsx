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
            <div className="relative flex flex-col mt-[9.7vh] w-[1353px] h-[84.8vh] min-h-[742px] max-h-[900px] bg-stone01 rounded-b-[10px]">
                <div className="w-[1353px] h-[325px] object-cover">
                    <img src={ProfileBackground} alt="ProfileBackground" />
                </div>
                <div className="absolute top-[233px] left-[211px]">
                    <ProfilePicture />
                </div>
                <div className="ml-[467px] mt-[33px]">
                    <UserInfo
                        username={username}
                        email={email}
                        house={house}
                    />
                </div>
                <div className="ml-[430px] mt-[52px] ">
                    <ProblemProgress
                        ranking={ranking}
                        point={point}
                        problem_count={problem_count}
                        problem_progress={problem_progress}
                    />
                </div>
                <div className="absolute bottom-[33px] left-[598px]">
                    <LogOutButton />
                </div>
            </div>
        </>
    );
}

export default ProfileCard;
