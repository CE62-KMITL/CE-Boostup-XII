function LessonCard() {
    return (
        <div>
            <button className="bg-stone01 w-[255.28px] h-[340px] border-1 rounded-lg flex flex-col
                                hover:transform hover:translate-y-[-10px] hover:transition hover:duration-300 transition transform translate-y-0 duration-300">
                <img className="w-[255.28px] h-[150px] rounded-t-lg" src="https://picsum.photos/256"></img>
                <div className="m-[9px] ml-[14.62px]">
                    <div className="w-[47px] h-[30px] font-bold text-[18px]">
                        Array
                    </div>
                    <div className="w-[219.23px] h-[104] font-medium text-empty text-left">
                        ขนาดควรเหมาะสมกับสื่อที่แสดง (Mobile Desktop etc.) โดยไม่ให้เล็กหรือใหญ่เกินไป ในการดีไซน์ mobile app... 
                    </div>
                </div>
            </button>
        </div>
    );
}

export default LessonCard;