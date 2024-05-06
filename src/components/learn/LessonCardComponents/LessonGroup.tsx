import LessonCard from "../LessonCard";

function LessonGroup () {
    return(
        <div className="ml-[80px] mt-[36px] w-[1353.13px] h-[340px] grid grid-cols-5 grid-rows-1 gap-x-19">
            <LessonCard/>
            <LessonCard/>
            <LessonCard/>
            <LessonCard/>
            <LessonCard/>
            {/* <LessonCard/>
            <LessonCard/>
            <LessonCard/>
            <LessonCard/>
            <LessonCard/> */}
        </div>
    );    
}

export default LessonGroup