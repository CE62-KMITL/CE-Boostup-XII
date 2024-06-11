import { Link } from "react-router-dom";
import MainIcon from "../../assets/MainIcon.svg";
import { useLocation } from "react-router-dom";

function NavBar() {
    const linkStyle = "transition-transform hover:translate-y-[4px] duration-200";
    const { pathname } = useLocation();
    const page = pathname.split("/")[1];

    return (
        <div className="flex justify-center items-center fixed top-0 right-0 z-30
        w-full xl:h-[50px] 2xl:h-[60px] bg-primary04">
            <div className="flex place-content-between
            xl:w-[1240px] 2xl:w-[1360px] h-auto">
                <Link to="/home/1" className="flex items-center">
                    <img src={MainIcon}
                        className="xl:w-[36px] xl:h-[36px] 2xl:w-[40px] 2xl:h-[40px]" alt="" />
                    <h2 className="text-stone01 text-[16px] m-[12px] ">
                        CE Boostup XII
                    </h2>
                </Link>
                <div className="flex items-center place-content-between xl:w-[400px] 2xl:w-[460px]">
                    <Link to="/home/1" className={`${linkStyle} ${page === "home" ? "text-accent" : "text-white"}`}>Home</Link>
                    <Link to="/learn" className={`${linkStyle} ${page === "learn" ? "text-accent" : "text-white"}`}>Learn</Link>
                    <Link to="/leaderboard" className={`${linkStyle} ${page === "leaderboard" ? "text-accent" : "text-white"}`}>Leaderboard</Link>
                    <Link to="/profile" className={`${linkStyle} ${page === "profile" ? "text-accent" : "text-white"}`}>Profile</Link>
                </div>
            </div>
        </div>
    );
}

export default NavBar;