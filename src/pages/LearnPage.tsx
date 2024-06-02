import NavBar from "../components/utils/NavBar";
import TitleText from "../components/learn/TitleText";
import SearchBar from "../components/learn/SearchBar";
import LessonGroup from "../components/learn/LessonCardComponents/LessonGroup";
import SolveComponent from "../components/learn/LessonCardComponents/SolveComponent";
// import Thumbnail1 from "../assets/test1-learn-thumbnail.png"
// import Thumbnail2 from "../assets/test2-learn-thumbnail.png"
// import DefaultThumbnail from "../assets/default-learn-thumbnail.png"
import Background from "../components/utils/Background";
import { useEffect } from "react";
import { attachmentsService } from "../services/attachments.service";
import { useDispatch } from "react-redux";
import { store } from "../store/store";
import { setAttachmentState } from "../store/slices/attachments.slice";
import { useQuery } from "react-query";
import { useState } from "react";

function LearnPage() {
    const lessons = store.getState().attachment.attachments;
    const [search, setSearch] = useState<string>("");
    const dispatch = useDispatch();

    const { status, refetch } = useQuery({
        queryKey: ['attachments'],
        queryFn: async () => await attachmentsService.getAttachments({ page: 1, perPage: 10, sort: "number", search }),
        enabled: lessons === null,
        onError: (error) => {
            console.error(error);
        },
        onSuccess: (response) => {
            dispatch(setAttachmentState(response.data));
        }
    });

    useEffect(() => {
        console.log(lessons);
        console.log(status);
    }, [status]);
    //     { title: "Array", description: "ขนาดควรเหมาะสมกับสื่อที่แสดง (Mobile Desktop etc.) โดยไม่ให้เล็กหรือใหญ่เกินไปในการดีไซน์ mobile app...", img: Thumbnail1 },
    //     { title: "Function", description: "kfpavalvalvlka[kvapjvlajmvlmamvlkmavlalvmnanvalknvlamvlanvamnvlanvlanlvnasvanvjansnvajnvjavnanvkansvkjasn", img: Thumbnail2 },
    //     { title: "Loop", description: "kfpavalvalvlka[kvapjvlajmvlmasdjsadjlsakdklsajdlksjadkljsalkdjsajdlsajdlkjdaksldjlksadlamvlkmasdsdsadasdsadasdasdsadsadsadasdsadasdsadsadsadavlalvmnanvalknvlamvlanvamnvlanvlanlvnasvanvjansnvajnvjavnanvkansvkjasn", img: DefaultThumbnail },
    //     { title: "Array", description: "kfpavalvalvlka[kvapjvlajmvlmamvlkmavlalvmnanvalknvlamvlanvamnvlanvlanlvnasvanvjansnvajnvjavnanvkansvkjasn", img: DefaultThumbnail },
    //     { title: "Recursive", description: "kfpavalvalvlka[kvapjvlajmvlmamvlkmavlalvmnanvalknvlamvlanvamnvlanvlanlvnasvanvjansnvajnvjavnanvkansvkjasn", img: DefaultThumbnail },
    //     { title: "Array", description: "ขนาดควรเหมาะสมกับสื่อที่แสดง (Mobile Desktop etc.) โดยไม่ให้เล็กหรือใหญ่เกินไปในการดีไซน์ mobile app...", img: Thumbnail1 },
    //     { title: "Array", description: "ขนาดควรเหมาะสมกับสื่อที่แสดง (Mobile Desktop etc.) โดยไม่ให้เล็กหรือใหญ่เกินไปในการดีไซน์ mobile app...", img: Thumbnail2 },
    //     { title: "Array", description: "ขนาดควรเหมาะสมกับสื่อที่แสดง (Mobile Desktop etc.) โดยไม่ให้เล็กหรือใหญ่เกินไปในการดีไซน์ mobile app...", img: DefaultThumbnail },
    //     { title: "Array", description: "ขนาดควรเหมาะสมกับสื่อที่แสดง (Mobile Desktop etc.) โดยไม่ให้เล็กหรือใหญ่เกินไปในการดีไซน์ mobile app...", img: DefaultThumbnail },
    //     { title: "Array", description: "ขนาดควรเหมาะสมกับสื่อที่แสดง (Mobile Desktop etc.) โดยไม่ให้เล็กหรือใหญ่เกินไปในการดีไซน์ mobile app...", img: DefaultThumbnail },
    //     { title: "Array", description: "ขนาดควรเหมาะสมกับสื่อที่แสดง (Mobile Desktop etc.) โดยไม่ให้เล็กหรือใหญ่เกินไปในการดีไซน์ mobile app...", img: DefaultThumbnail },
    // ];

    return (
        <div>
            <div>
                <NavBar />
                <Background />
            </div>
            <div className="flex justify-center z-30 ">
                <div className="absolute">
                    <TitleText />
                    <SearchBar setSearch={setSearch} refetch={refetch} />
                    <LessonGroup lessons={lessons} />
                    <SolveComponent />
                </div>
            </div>
        </div>
    );
}

export default LearnPage;

