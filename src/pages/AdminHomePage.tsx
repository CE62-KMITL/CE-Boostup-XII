import TitleText from "../components/admin-home/TitleText";
import SearchBar from "../components/admin-home/SearchBar";
import ProblemBar from "../components/admin-home/ProblemBar";
import ProblemsTable from "../components/admin-home/ProblemsTable";
import Background from "../components/utils/Background";
import NavBar from "../components/utils/NavBar";
import { useProblems } from "../hooks/problems.hook";
import LoadingPage from "./LoadingPage";
import { useProblemsTags } from "../hooks/problem-tags.hook";
import { useProblemsStore } from "../store/zustand/problems.zustand";
import { useUser } from "../hooks/user.hook";
import Dropdown from "../components/utils/Dropdown";
import { useEffect, useState } from "react";
import { DropdownType } from "../types/dropdown.type";
import { usePaginationRequestStore } from "../store/zustand/pagination.zustand";
import { useParams, useNavigate } from "react-router-dom";

export default function HomePage() {
    const user = useUser().user;
    const { page } = useParams();
    const navigate = useNavigate();
    const { problems: problemsStore, isFetched, pages } = useProblemsStore();
    const [pagesList] = useState<DropdownType[]>([]);
    const { setPaginationRequest, paginationRequest } = usePaginationRequestStore();

    useEffect(() => {
        if (page)
            setPaginationRequest({
                ...paginationRequest,
                page: parseInt(page)
            });
    }, [page]);

    const { isLoading: isLoadingProblem, error } = useProblems();
    const { isLoading: isLoadingProblemTags } = useProblemsTags();

    useEffect(() => {
        if (pagesList.length !== 0) pagesList.splice(0, pagesList.length);
        if (pages) {
            for (let i = 1; i <= pages; i++)
                pagesList.push({ value: i.toString(), name: i.toString() });
        }
    }, [pages]);

    function handelPageChange(selectedPage: string) {
        navigate(`/home/${selectedPage}`);
    }

    if (error) console.error(error);

    if ((isLoadingProblem && !isFetched) || isLoadingProblemTags) return <LoadingPage />;
    
    return (
        <>
            <Background />
            <div className="flex justify-center overflow-y-auto">
                <NavBar />
                <div className="xl:w-[1240px] 2xl:w-[1360px] h-fit xl:my-[98px] 2xl:my-[108px]x">
                    <div className="flex flex-col w-full h-fit">
                        <TitleText username={user?.displayName as string} />
                        <SearchBar />
                        {problemsStore?.length !== 0 && <ProblemBar />}
                    </div>
                    <div className="flex flex-col w-full space-y-[16px]">
                        {
                            problemsStore?.length === 0 ? <div className="text-6xl mt-4 self-center text-accent02">ไม่พบข้อมูล</div> :
                                problemsStore?.map((problem) => (
                                    <ProblemsTable
                                        id={problem.id}
                                        title={problem.title}
                                        lesson={problem.tags as { id: string, name: string }[]}
                                        level={problem.difficulty}
                                        status={problem.publicationStatus}
                                        owner={problem.owner}
                                    />
                                ))
                        }
                        <div className="self-end">
                            <Dropdown type={1} selected={page} values={pagesList} onChange={(e) => handelPageChange(e as string)} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}