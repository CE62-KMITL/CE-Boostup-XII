import TitleText from "../components/learn/TitleText";
import SearchBar from "../components/learn/SearchBar";
import LessonGroup from "../components/learn/LessonCardComponents/LessonGroup";
import SolveComponent from "../components/learn/LessonCardComponents/SolveComponent";

function LearnPage() {
    return (
        <div className="hide-scrollbar">
            <div className="z-0">
                <div className="default-background"></div>
            </div>
            <div className="container w-1582 h-auto mx-auto overflow-y-auto z-30">
                <div className="absolute">
                    <TitleText />
                    <SearchBar />
                    <LessonGroup />
                    <LessonGroup />
                    <LessonGroup />
                    <SolveComponent />
                </div>
            </div>

        </div>


    );
}

export default LearnPage