import LessonCard from "../LessonCard";

function LessonGroup({ lessons }: { lessons: { title: string; description: string; img: string }[] }) {
    return (
        <div className="ml-[80px] w-[1353.13px] h-auto grid grid-cols-5 gap-x-19 gap-y-8">
            {lessons.map((lesson, index) => (
                <LessonCard key={index} title={lesson.title} description={lesson.description} img={lesson.img} />
            ))}
        </div>
    );
}

export default LessonGroup;
