import LessonCard from "../LessonCard";
import { useLearn } from "../../../hooks/learn.hook";

function LessonGroup() {
    const { learn } = useLearn();

    return (
        <div className=" w-auto h-auto grid grid-cols-3 gap-x-[19px] gap-y-[36px]">
            {learn?.map((lesson, index) => (
                <LessonCard key={index} title={lesson.title} description={lesson.description} img={lesson.img} />
            ))}
        </div>
    );
}

export default LessonGroup;
