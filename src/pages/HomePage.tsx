import TitleText from "../components/home/TitleText";
import SearchBar from "../components/home/SearchBar";
import ProblemBar from "../components/home/ProblemBar";
import ProblemsTable from "../components/home/ProblemsTable";
import Background from "../components/utils/Background";
import { store } from "../store/store";
import NavBar from "../components/utils/NavBar";
import { useProblems } from "../hooks/problems.hook";
import LoadingPage from "./LoadingPage";
import { useProblemsTags } from "../hooks/problemTags.hook";
import { useProblemsStore } from "../store/zustand/problems.zustand";

function HomePage() {
    const user = store.getState().auth.user;
    const { problems: problemsStore, isFetched } = useProblemsStore();

    const { isLoading: isLoadingProblem, error } = useProblems();
    const { isLoading: isLoadingProblemTags } = useProblemsTags();

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
                            problemsStore?.length === 0 ? <div className="text-6xl mt-4 self-center text-accent2">ไม่พบข้อมูล</div> :
                                problemsStore?.map((problem) => (
                                    <ProblemsTable
                                        id={problem.id}
                                        number={problem.number?.toString() as string}
                                        title={problem.title as string}
                                        lesson={problem.tags as { id: string, name: string }[]}
                                        level={problem.difficulty as number}
                                        attempters={problem.userSolvedCount as number}
                                        score={problem.score as number}
                                        status={problem.completionStatus as string}
                                    />
                                ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;