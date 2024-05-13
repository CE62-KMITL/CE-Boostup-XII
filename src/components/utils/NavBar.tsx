import { Link } from "react-router-dom";
import MainIcon from "../../assets/MainIcon.svg";

function NavBar() {
    const linkStyle = "transition-transform hover:translate-y-[4px] duration-200 text-stone01";

    return (
        <div className="flex justify-center items-center fixed top-0 right-0 z-30
        w-full xl:h-[50px] 2xl:h-[60px] bg-primary04"> 
            <div className="flex place-content-between
            xl:w-[1240px] 2xl:w-[1360px] h-auto">
                <div className="flex items-center">
                    <img src={MainIcon}
                    className="xl:w-[36px] xl:h-[36px] 2xl:w-[40px] 2xl:h-[40px]" alt="" />
                    <h2 className="text-stone01 text-[16px] m-[12px] ">
                        CE Boostup XII
                    </h2>
                </div>
                <div className="flex items-center place-content-between xl:w-[600px] 2xl:w-[660px]">
                    <Link to="/home" className={linkStyle}>Home</Link>
                    <Link to="/archive" className={linkStyle}>Archive</Link>
                    <Link to="/learn" className={linkStyle}>Learn</Link>
                    <Link to="/leaderboard" className={linkStyle}>Leaderboard</Link>
                    <Link to="/compiler" className={linkStyle}>Compiler</Link>
                    <Link to="/profile" className={linkStyle}>Profile</Link>
                </div>
            </div>
        </div>
    );
}

export default NavBar;