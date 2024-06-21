import TitleText from "../components/home/TitleText";
import SearchBar from "../components/home/SearchBar";
import ProblemBar from "../components/home/ProblemBar";
import ProblemsTable from "../components/home/ProblemsTable";
import Background from "../components/utils/Background";
import { useProblems } from "../hooks/problems.hook";
import LoadingPage from "./LoadingPage";
import { useProblemsTags } from "../hooks/problem-tags.hook";
import { useProblemsStore } from "../store/zustand/problems.zustand";
import { useEffect, useState } from "react";
import { DropdownType } from "../types/dropdown.type";
import { usePaginationRequestStore } from "../store/zustand/pagination.zustand";
import AdminSearchBar from "../components/admin-home/SearchBar";
import AdminProblemsTable from "../components/admin-home/ProblemsTable";
import AdminProblemBar from "../components/admin-home/ProblemBar";
import { Role } from "../enum/roles.enum";
import { usePermission } from "../hooks/permission.hook";
import { useScroll } from "../hooks/scroll.hook";

export default function HomePage() {
    const permission = usePermission([Role.Admin, Role.Staff, Role.Reviewer, Role.SuperAdmin]);
    const [page, setPage] = useState<number>(1);
    const { problems: problemsStore, isFetched, pages } = useProblemsStore();
    const [pagesList] = useState<DropdownType[]>([]);
    const { setPaginationRequest, paginationRequest } = usePaginationRequestStore();
    const { isBottom } = useScroll();

    useEffect(() => {
        if (page)
            setPaginationRequest({
                ...paginationRequest,
                page: page,
                sort: "createdAt",
            });
    }, [page]);

    useEffect(() => {
        setPaginationRequest({
            ...paginationRequest,
            page: page,
            sort: "createdAt",
            owner: undefined,
            tags: undefined,
            search: undefined,
            difficulties: undefined,
            completionStatus: undefined,
            publicationStatus: undefined,
            problem: undefined,
            roles: undefined,
        });
    }, []);

    useEffect(() => {
        if (pages && isBottom && page < pages)
            setPage((prev) => prev + 1);
    }, [isBottom]);

    const { isLoading: isLoadingProblem, error } = useProblems();
    const { isLoading: isLoadingProblemTags } = useProblemsTags();

    useEffect(() => {
        if (pagesList.length !== 0) pagesList.splice(0, pagesList.length);
        if (pages)
            Array.from({ length: pages }, (_, i) => pagesList.push({ value: (i + 1).toString(), name: (i + 1).toString() }));
    }, [pages]);

    if (error) console.error(error);

    if ((isLoadingProblem && !isFetched) || isLoadingProblemTags) return <LoadingPage />;

    return (
        <>
            <Background />
            <div className="flex justify-center overflow-y-auto">
                <div className="xl:w-[1240px] 2xl:w-[1360px] h-fit xl:my-[98px] 2xl:my-[108px]x">
                    <div className="flex flex-col w-full h-fit">
                        <TitleText />
                        {
                            permission ? <AdminSearchBar resetPage={() => setPage(1)} /> : <SearchBar resetPage={() => setPage(1)} />
                        }
                        {problemsStore?.length !== 0 && permission ? <AdminProblemBar /> : <ProblemBar />}
                    </div>
                    <div className="flex flex-col w-full space-y-[16px]">
                        {
                            problemsStore?.length === 0 ? <div className="text-6xl mt-4 self-center text-accent02">ไม่พบข้อมูล</div> :
                                problemsStore?.map((problem) => (
                                    permission ?
                                        <AdminProblemsTable
                                            id={problem.id}
                                            title={problem.title}
                                            lesson={problem.tags as { id: string, name: string }[]}
                                            level={problem.difficulty}
                                            owner={problem.owner}
                                            publicationStatus={problem.publicationStatus}
                                        />
                                        :
                                        <ProblemsTable
                                            id={problem.id}
                                            number={problem.number?.toString()}
                                            title={problem.title}
                                            lesson={problem.tags as { id: string, name: string }[]}
                                            level={problem.difficulty}
                                            attempters={problem.userSolvedCount}
                                            score={problem.score}
                                            status={problem.completionStatus}
                                        />
                                ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}