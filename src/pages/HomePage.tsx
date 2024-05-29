import TitleText from "../components/home/TitleText";
import SearchBar from "../components/home/SearchBar";
import ProblemBar from "../components/home/ProblemBar";
import ProblemsTable from "../components/home/ProblemsTable";
import Background from "../components/utils/Background";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { store } from "../store/store";
import { PaginationRequestDto } from "../dto/utils.dto";
import NavBar from "../components/utils/NavBar";
import { useProblems } from "../components/hooks/problems.hook";
import LoadingPage from "./LoadingPage";
import { useProblemsTags } from "../components/hooks/problemTags.hook";

function HomePage() {
    const dispatch = useDispatch();
    const user = store.getState().auth.user;

    const [params, setParams] = useState<PaginationRequestDto>({
        page: 1,
        perPage: 10,
        sort: "number",
        difficulties: "1,2,3,4,5",
    });

    const { problems, isLoading: isLoadingProblem, error } = useProblems(params);
    const { problemTags, isLoading: isLoadingProblemTags } = useProblemsTags({ page: 1, perPage: 10, sort: "name", search: "", owner: "" });

    if (error) console.error(error);

    if (isLoadingProblem || isLoadingProblemTags) return <LoadingPage />;

    if (problems) console.log(problems);

    return (
        <>
            <Background />
            <div className="flex justify-center overflow-y-auto">
                <NavBar />
                <div className="xl:w-[1240px] 2xl:w-[1360px] h-fit xl:my-[98px] 2xl:my-[108px]x">
                    <div className="flex flex-col w-full h-fit">
                        <TitleText username={user?.displayName as string} />
                        <SearchBar setParams={setParams} />
                        <ProblemBar />
                    </div>
                    <div className="flex flex-col w-full space-y-[16px]">
                        {problems?.data.map((problem) => (
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
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;