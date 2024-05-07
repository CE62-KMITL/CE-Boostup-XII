import NavBar from "../components/utils/NavBar";
import Footer from "../components/utils/Footer";
import TitleText from "../components/learn/TitleText";
import SearchBar from "../components/learn/SearchBar";
import LessonGroup from "../components/learn/LessonCardComponents/LessonGroup";
import SolveComponent from "../components/learn/LessonCardComponents/SolveComponent";
import thumbnail_1 from "../assets/test1-learn-thumbnail.png"
import thumbnail_2 from "../assets/test2-learn-thumbnail.png"
import default_thumbnail from "../assets/default-learn-thumbnail.png"

function LearnPage() {

    const lessons = [
        { title: "Array", description: "ขนาดควรเหมาะสมกับสื่อที่แสดง (Mobile Desktop etc.) โดยไม่ให้เล็กหรือใหญ่เกินไปในการดีไซน์ mobile app...", img: thumbnail_1 },
        { title: "Function", description: "kfpavalvalvlka[kvapjvlajmvlmamvlkmavlalvmnanvalknvlamvlanvamnvlanvlanlvnasvanvjansnvajnvjavnanvkansvkjasn", img: thumbnail_2 },
        { title: "Loop", description: "kfpavalvalvlka[kvapjvlajmvlmasdjsadjlsakdklsajdlksjadkljsalkdjsajdlsajdlkjdaksldjlksadlamvlkmasdsdsadasdsadasdasdsadsadsadasdsadasdsadsadsadavlalvmnanvalknvlamvlanvamnvlanvlanlvnasvanvjansnvajnvjavnanvkansvkjasn", img: default_thumbnail },
        { title: "Array", description: "kfpavalvalvlka[kvapjvlajmvlmamvlkmavlalvmnanvalknvlamvlanvamnvlanvlanlvnasvanvjansnvajnvjavnanvkansvkjasn", img: default_thumbnail },
        { title: "Recursive", description: "kfpavalvalvlka[kvapjvlajmvlmamvlkmavlalvmnanvalknvlamvlanvamnvlanvlanlvnasvanvjansnvajnvjavnanvkansvkjasn", img: default_thumbnail },
        { title: "Array", description: "ขนาดควรเหมาะสมกับสื่อที่แสดง (Mobile Desktop etc.) โดยไม่ให้เล็กหรือใหญ่เกินไปในการดีไซน์ mobile app...", img: thumbnail_1 },
        { title: "Array", description: "ขนาดควรเหมาะสมกับสื่อที่แสดง (Mobile Desktop etc.) โดยไม่ให้เล็กหรือใหญ่เกินไปในการดีไซน์ mobile app...", img: thumbnail_2 },
        { title: "Array", description: "ขนาดควรเหมาะสมกับสื่อที่แสดง (Mobile Desktop etc.) โดยไม่ให้เล็กหรือใหญ่เกินไปในการดีไซน์ mobile app...", img: default_thumbnail },
        { title: "Array", description: "ขนาดควรเหมาะสมกับสื่อที่แสดง (Mobile Desktop etc.) โดยไม่ให้เล็กหรือใหญ่เกินไปในการดีไซน์ mobile app...", img: default_thumbnail },
        { title: "Array", description: "ขนาดควรเหมาะสมกับสื่อที่แสดง (Mobile Desktop etc.) โดยไม่ให้เล็กหรือใหญ่เกินไปในการดีไซน์ mobile app...", img: default_thumbnail },
        { title: "Array", description: "ขนาดควรเหมาะสมกับสื่อที่แสดง (Mobile Desktop etc.) โดยไม่ให้เล็กหรือใหญ่เกินไปในการดีไซน์ mobile app...", img: default_thumbnail },
    ];

    return (
        <div>
            <div className="z-0 ">
                <div className="default-background"></div>
            </div>
            <div>
                <NavBar />
            </div>
            <div className="flex justify-center z-30 ">
                <div className="absolute">
                    <TitleText />
                    <SearchBar />
                    <LessonGroup lessons={lessons} />
                    <SolveComponent />
                </div>
            </div>
        </div>
    );
}

export default LearnPage;

