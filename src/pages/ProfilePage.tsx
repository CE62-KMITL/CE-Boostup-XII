import NavBar from "../components/utils/NavBar";
import Background from "../components/utils/Background";
import ProfileCard from "../components/profile/ProfileCard";
import Nick from "../assets/Ellipse 28.png"

function ProfilePage() {
    const data = {
        username: "Uchiha Itachi",
        email: "uchiha404@gmail.com",
        house: "konohagakure",
        profile_icon: "https://i.pinimg.com/originals/7a/04/18/7a04186fe969cca602e223e2346fc68e.jpg",
        finished_percentage: 67.5,
        ranking: 12,
        total_points: 150,
        total_problems: 16,
    }    

    return(
        <>
            <Background/>
            <NavBar/>
            <div className="flex justify-center items-center absolute bottom-0 w-screen 
            lg:h-[calc(100vh-40px)] xl:h-[calc(100vh-50px)] 2xl:h-[calc(100vh-60px)] 
            lg:px-[40px] xl:px-[60px] 2xl:px-[80px] 
            lg:py-[35px] xl:py-[40px] 2xl:py-[45px]">
                <ProfileCard
                    data={data}
                />
            </div>
        </>
    );
}

export default ProfilePage