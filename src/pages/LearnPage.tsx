import NavBar from "../components/utils/NavBar";
import Footer from "../components/utils/Footer";
import TitleText from "../components/learn/TitleText";
import SearchBar from "../components/learn/SearchBar";
import LessonGroup from "../components/learn/LessonCardComponents/LessonGroup";
import SolveComponent from "../components/learn/LessonCardComponents/SolveComponent";
import Thumbnail1 from "../assets/test1-learn-thumbnail.png"
import Thumbnail2 from "../assets/test2-learn-thumbnail.png"
import DefaultThumbnail from "../assets/default-learn-thumbnail.png"
import Background from "../components/utils/Background";

function LearnPage() {

    const lessons = [
        { title: "Array", description: "ขนาดควรเหมาะสมกับสื่อที่แสดง (Mobile Desktop etc.) โดยไม่ให้เล็กหรือใหญ่เกินไปในการดีไซน์ mobile app...", img: Thumbnail1 },
        { title: "Function", description: "kfpavalvalvlka[kvapjvlajmvlmamvlkmavlalvmnanvalknvlamvlanvamnvlanvlanlvnasvanvjansnvajnvjavnanvkansvkjasn", img: Thumbnail2 },
        { title: "Loop", description: "kfpavalvalvlka[kvapjvlajmvlmasdjsadjlsakdklsajdlksjadkljsalkdjsajdlsajdlkjdaksldjlksadlamvlkmasdsdsadasdsadasdasdsadsadsadasdsadasdsadsadsadavlalvmnanvalknvlamvlanvamnvlanvlanlvnasvanvjansnvajnvjavnanvkansvkjasn", img: DefaultThumbnail },
        { title: "Array", description: "kfpavalvalvlka[kvapjvlajmvlmamvlkmavlalvmnanvalknvlamvlanvamnvlanvlanlvnasvanvjansnvajnvjavnanvkansvkjasn", img: DefaultThumbnail },
        { title: "Recursive", description: "kfpavalvalvlka[kvapjvlajmvlmamvlkmavlalvmnanvalknvlamvlanvamnvlanvlanlvnasvanvjansnvajnvjavnanvkansvkjasn", img: DefaultThumbnail },
        { title: "Array", description: "ขนาดควรเหมาะสมกับสื่อที่แสดง (Mobile Desktop etc.) โดยไม่ให้เล็กหรือใหญ่เกินไปในการดีไซน์ mobile app...", img: Thumbnail1 },
        { title: "Array", description: "ขนาดควรเหมาะสมกับสื่อที่แสดง (Mobile Desktop etc.) โดยไม่ให้เล็กหรือใหญ่เกินไปในการดีไซน์ mobile app...", img: Thumbnail2 },
        { title: "Array", description: "ขนาดควรเหมาะสมกับสื่อที่แสดง (Mobile Desktop etc.) โดยไม่ให้เล็กหรือใหญ่เกินไปในการดีไซน์ mobile app...", img: DefaultThumbnail },
        { title: "Array", description: "ขนาดควรเหมาะสมกับสื่อที่แสดง (Mobile Desktop etc.) โดยไม่ให้เล็กหรือใหญ่เกินไปในการดีไซน์ mobile app...", img: DefaultThumbnail },
        { title: "Array", description: "ขนาดควรเหมาะสมกับสื่อที่แสดง (Mobile Desktop etc.) โดยไม่ให้เล็กหรือใหญ่เกินไปในการดีไซน์ mobile app...", img: DefaultThumbnail },
        { title: "Array", description: "ขนาดควรเหมาะสมกับสื่อที่แสดง (Mobile Desktop etc.) โดยไม่ให้เล็กหรือใหญ่เกินไปในการดีไซน์ mobile app...", img: DefaultThumbnail },
    ];

    return (
        <div>
            <div>
                <NavBar />
                <Background/>
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

