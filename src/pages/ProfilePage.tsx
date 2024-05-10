import NavBar from "../components/utils/NavBar";
import Footer from "../components/utils/Footer";
import Background from "../components/utils/Background";
import ProfileCard from "../components/profile/ProfileCard";

function ProfilePage() {
    const account_info = {
        profile_picture: "https://picsum.photos/200",
        username: "นุกนิก นิกกี้เดส",
        email: "ce_nicky@gmail.com",
        house: "บ้านบางแค"
    }
        
    return(
        <div>
            <div>
                <NavBar/>
                <Background/>
            </div>
            <div className="flex justify-center">
                <ProfileCard 
                    profile_picture={account_info.profile_picture}
                    username={account_info.username}
                    email={account_info.email}
                    house={account_info.house}
                />
            </div>
        </div>
    );
}

export default ProfilePage