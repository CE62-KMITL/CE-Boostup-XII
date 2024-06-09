import NavBar from "../components/utils/NavBar";
import TitleText from "../components/learn/TitleText";
import SearchBar from "../components/learn/SearchBar";
import LessonGroup from "../components/learn/LessonCardComponents/LessonGroup";
import SolveComponent from "../components/learn/LessonCardComponents/SolveComponent";
import Background from "../components/utils/Background";

export default function LearnPage() {
    return (
        <div>
            <div>
                <NavBar />
                <Background />
            </div>
            <div className="flex justify-center z-30 ">
                <div className="absolute">
                    <TitleText />
                    <SearchBar />
                    <LessonGroup />
                    <SolveComponent />
                </div>
            </div>
        </div>
    );
}