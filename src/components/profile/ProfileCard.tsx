import ProfileBackground from "../../assets/profile-background.png";
import LogOutButton from "./LogoutButton";
import ProfilePicture from "./ProfilePicture";
import UserInfo from "./๊UserInfo";

function ProfileCard({ profile_picture, username, email, house }: {
    profile_picture: string,
    username: string,
    email: string,
    house: string,
}) {
    return (
        <div>
            <div className="flex flex-col mt-[96px] w-[1353px] h-[833px] bg-stone01 rounded-b-[10px]">
                {/* <div>
                    <img className="w-[1353px] h-[325px]" src="https://picsum.photos/1353/325" alt="ProfileBackground" />
                </div> */}
                {/* <div>
                    <ProfilePicture profile_picture={profile_picture} />
                </div> */}
                <UserInfo
                    username={username}
                    email={email}
                    house={house}
                />
                <LogOutButton/>
            </div>
                
        </div>
    );
}

export default ProfileCard;
