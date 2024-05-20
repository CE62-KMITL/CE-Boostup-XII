import LessonCard from "../LessonCard";
import { AttachmentModelResponse } from "../../../types/response.type";

type LessonGroupProps = {
    lessons: AttachmentModelResponse[] | null;
}

function LessonGroup({ lessons }: LessonGroupProps) {
    return (
        <div className=" w-auto h-auto grid grid-cols-5 gap-x-[19px] gap-y-[36px]">
            {lessons?.map((lesson, index) => (
                <LessonCard key={index} title={lesson.name as string} description={lesson.type as string} img={lesson.url as string} />
            ))}
        </div>
    );
}

export default LessonGroup;
