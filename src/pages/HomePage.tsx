import TitleText from "../components/home/TitleText";
import SearchBar from "../components/home/SearchBar";
import ProblemBar from "../components/home/ProblemBar";
import ProblemsTable from "../components/home/ProblemsTable";
import Background from "../components/utils/Background";
import { problemService } from "../services/problem.service";
import { useEffect } from "react";
import { setProblemState } from "../store/slices/problem.slice";
import { useDispatch } from "react-redux";
import { store } from "../store/store";

function HomePage() {
    const dispatch = useDispatch();
    const user = store.getState().auth.user;
    const problems = store.getState().problem.problem;

    async function fetchProblems() {
        try {
            const response = await problemService.getProblems({ page: 1, perPage: 10, sort: "number", search: "" , tags: ["fab65fe9-5941-4e20-9969-061beba2399f"], difficulties: [1, 2, 3, 4, 5]});
            dispatch(setProblemState(response.data));
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (!problems)
            fetchProblems();
    }, []);

    return (
        <>
            <Background/>
            <div className="flex justify-center overflow-y-auto">
                <div className="xl:w-[1240px] 2xl:w-[1360px] h-fit xl:my-[75px] 2xl:my-[90px]">
                    <div className="flex flex-col w-full h-fit">
                        <TitleText username={user?.displayName as string}/>
                        <SearchBar />
                        <ProblemBar/>
                    </div>
                    <div className="flex flex-col w-full space-y-[16px]">
                        {problems?.map((problem) => (
                            <ProblemsTable
                                key={problem.id} 
                                number={problem.number?.toString() as string}
                                title={problem.title as string} 
                                lesson={problem.attachments?.[0].type as string} 
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