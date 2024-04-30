import NavBar from "../components/utils/NavBar";

import TitleText from "../components/home/TitleText";
import SearchBar from "../components/home/SearchBar";

function HomePage() {
    return (
        <div className="flex justify-center items-center 
        default-background w-screen h-screen">
            <NavBar/>
            <div className="
            w-[90%] min-w-[1320px] max-w-[1640px]
            h-[80%] min-h-[600px] max-h-[1080px]">
                <TitleText username="น้องต้นกล้า"/>
                <SearchBar/>
                

            </div>
        </div>
    );
}

export default HomePage;