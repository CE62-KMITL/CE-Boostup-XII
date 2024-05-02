import LessonCard from "../LessonCard";

function LessonGroup () {
    return(
        <div className="ml-[80px] mr-[80px] grid grid-cols-5 gap-19">
            <LessonCard/>
            <LessonCard/>
            <LessonCard/>
            <LessonCard/>
            <LessonCard/>
        </div>
    );    
}

export default LessonGroup