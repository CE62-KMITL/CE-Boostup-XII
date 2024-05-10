import LessonCard from "../LessonCard";

function LessonGroup({ lessons }: { lessons: { title: string; description: string; img: string }[] }) {
    return (
        <div className=" w-auto h-auto grid grid-cols-5 gap-x-[19px] gap-y-[36px]">
            {lessons.map((lesson, index) => (
                <LessonCard key={index} title={lesson.title} description={lesson.description} img={lesson.img} />
            ))}
        </div>
    );
}

export default LessonGroup;
