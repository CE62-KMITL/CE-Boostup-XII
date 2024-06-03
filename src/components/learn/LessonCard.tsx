import default_thumbnail from "../../assets/default-learn-thumbnail.png"

function LessonCard({ title, description, img }: { title: string; description: string; img: string }) {
    return (
        <div>
            <button className="bg-stone01 w-[438px] h-[575px] border-1 rounded-lg flex flex-col hover:transform hover:translate-y-[-10px] hover:transition hover:duration-300 transition transform translate-y-0 duration-300">
                <img className="w-[438px] h-[262px] rounded-t-lg" src={img} alt="thumbnail" />
                <div className="m-[9px] ml-[14.62px]">
                    <div className="w-full h-[30px] font-bold text-[18px] text-left">{title}</div>
                    <div className="w-[376.23px] h-[104] font-medium text-empty text-left lesson-text-description">{description}</div>
                </div>
            </button>
        </div>
    );
}

export default LessonCard;
