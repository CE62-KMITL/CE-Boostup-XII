import TitleText from "../components/learn/TitleText";
import SearchBar from "../components/learn/SearchBar";
import LessonGroup from "../components/learn/LessonCardComponents/LessonGroup";
import SolveComponent from "../components/learn/LessonCardComponents/SolveComponent";

function LearnPage() {
    return (
        <div className="default-background w-screen h-screen">
            <TitleText/>
            <SearchBar/>
            <LessonGroup/>
            <SolveComponent/>
        </div>
    );
}

export default LearnPage