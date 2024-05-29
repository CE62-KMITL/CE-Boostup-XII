import NavBar from "../components/utils/NavBar";
import Footer from "../components/utils/Footer";
import Background from "../components/utils/Background";
import ProfileCard from "../components/profile/ProfileCard";
import Nick from "../assets/Ellipse 28.png"

function ProfilePage() {
    const account_info = {
        profile_picture: Nick,
        username: "นุกนิก นิกกี้เดส",
        email: "ce_nicky@gmail.com",
        house: "บ้านบางแค",
        ranking: "999",
        point: "123",
        problem_count:"10",
        problem_progress: "35"
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
                    ranking={account_info.ranking}
                    point={account_info.point}
                    problem_count={account_info.problem_count}
                    problem_progress={account_info.problem_progress}
                />
            </div>
    
        </div>
    );
}

export default ProfilePage