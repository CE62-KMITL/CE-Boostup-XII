import NavBar from "../components/utils/NavBar";
import Footer from "../components/utils/Footer";
import TitleText from "../components/learn/TitleText";
import SearchBar from "../components/learn/SearchBar";
import LessonGroup from "../components/learn/LessonCardComponents/LessonGroup";
import SolveComponent from "../components/learn/LessonCardComponents/SolveComponent";

function LearnPage() {

    const lessons = [
        { title: "Array", description: "ขนาดควรเหมาะสมกับสื่อที่แสดง (Mobile Desktop etc.) โดยไม่ให้เล็กหรือใหญ่เกินไปในการดีไซน์ mobile app...", img: "https://picsum.photos/256" },
        { title: "Function", description: "kfpavalvalvlka[kvapjvlajmvlmamvlkmavlalvmnanvalknvlamvlanvamnvlanvlanlvnasvanvjansnvajnvjavnanvkansvkjasn", img: "https://picsum.photos/256" },
        { title: "Loop", description: "kfpavalvalvlka[kvapjvlajmvlmamvlkmavlalvmnanvalknvlamvlanvamnvlanvlanlvnasvanvjansnvajnvjavnanvkansvkjasn", img: "https://picsum.photos/256" },
        { title: "Array", description: "kfpavalvalvlka[kvapjvlajmvlmamvlkmavlalvmnanvalknvlamvlanvamnvlanvlanlvnasvanvjansnvajnvjavnanvkansvkjasn", img: "https://picsum.photos/256" },
        { title: "Recursive", description: "kfpavalvalvlka[kvapjvlajmvlmamvlkmavlalvmnanvalknvlamvlanvamnvlanvlanlvnasvanvjansnvajnvjavnanvkansvkjasn", img: "https://picsum.photos/256" },
        { title: "Array", description: "ขนาดควรเหมาะสมกับสื่อที่แสดง (Mobile Desktop etc.) โดยไม่ให้เล็กหรือใหญ่เกินไปในการดีไซน์ mobile app...", img: "https://picsum.photos/256" },
        { title: "Array", description: "ขนาดควรเหมาะสมกับสื่อที่แสดง (Mobile Desktop etc.) โดยไม่ให้เล็กหรือใหญ่เกินไปในการดีไซน์ mobile app...", img: "https://picsum.photos/256" },
        { title: "Array", description: "ขนาดควรเหมาะสมกับสื่อที่แสดง (Mobile Desktop etc.) โดยไม่ให้เล็กหรือใหญ่เกินไปในการดีไซน์ mobile app...", img: "https://picsum.photos/256" },
        { title: "Array", description: "ขนาดควรเหมาะสมกับสื่อที่แสดง (Mobile Desktop etc.) โดยไม่ให้เล็กหรือใหญ่เกินไปในการดีไซน์ mobile app...", img: "https://picsum.photos/256" },
        { title: "Array", description: "ขนาดควรเหมาะสมกับสื่อที่แสดง (Mobile Desktop etc.) โดยไม่ให้เล็กหรือใหญ่เกินไปในการดีไซน์ mobile app...", img: "https://picsum.photos/256" },
        { title: "Array", description: "ขนาดควรเหมาะสมกับสื่อที่แสดง (Mobile Desktop etc.) โดยไม่ให้เล็กหรือใหญ่เกินไปในการดีไซน์ mobile app...", img: "https://picsum.photos/256" },
    ];

    return (
        <div>
            <div className="z-0">
                <div className="default-background"></div>
            </div>
            <div>
                <NavBar />
            </div>
            <div className="container w-1582 h-auto mx-auto overflow-y-auto z-30">
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
