import NavBar from "../components/utils/NavBar";

import TitleText from "../components/home/TitleText";
import SearchBar from "../components/home/SearchBar";
import ProblemBar from "../components/home/ProblemBar";
import ProblemsTable from "../components/home/ProblemsTable";
import Background from "../components/utils/Background";

function HomePage() {
    // Sample data for demonstration
    const problems = [
        { number: 1, title: "Problem 1", lesson: "Lesson 1", level: 1, attempters: 5, score: "100", status: "pass" },
        { number: 2, title: "Problem 2", lesson: "Lesson 2", level: 3, attempters: 3, score: "120", status: "empty" },
        { number: 3, title: "Problem 3", lesson: "Lesson 3", level: 5, attempters: 7, score: "80", status: "unpass" },
        { number: 4, title: "Problem 4", lesson: "Lesson 4", level: 2, attempters: 8, score: "90", status: "pass" },
        { number: 5, title: "Problem 5", lesson: "Lesson 5", level: 4, attempters: 2, score: "110", status: "empty" },
        { number: 6, title: "Problem 6", lesson: "Lesson 6", level: 3, attempters: 6, score: "95", status: "unpass" },
        { number: 7, title: "Problem 7", lesson: "Lesson 7", level: 1, attempters: 4, score: "105", status: "pass" },
        { number: 8, title: "Problem 8", lesson: "Lesson 8", level: 5, attempters: 9, score: "85", status: "empty" },
        { number: 9, title: "Problem 9", lesson: "Lesson 9", level: 2, attempters: 3, score: "115", status: "unpass" },
        { number: 10, title: "Problem 10", lesson: "Lesson 10", level: 4, attempters: 7, score: "75", status: "pass" },
        { number: 11, title: "Problem 11", lesson: "Lesson 11", level: 3, attempters: 5, score: "95", status: "empty" },
        { number: 12, title: "Problem 12", lesson: "Lesson 12", level: 1, attempters: 2, score: "105", status: "unpass" },
        { number: 13, title: "Problem 13", lesson: "Lesson 13", level: 2, attempters: 6, score: "85", status: "pass" },
        { number: 14, title: "Problem 14", lesson: "Lesson 14", level: 4, attempters: 4, score: "95", status: "empty" },
        { number: 15, title: "Problem 15", lesson: "Lesson 15", level: 3, attempters: 3, score: "105", status: "unpass" },
        { number: 16, title: "Problem 16", lesson: "Lesson 16", level: 1, attempters: 7, score: "75", status: "pass" },
    ];

    return (
        <>
            <Background/>
            <div className="flex justify-center m-auto overflow-y-auto">
                <NavBar />
                <div className="xl:w-[1240px] 2xl:w-[1360px] h-fit xl:my-[75px] 2xl:my-[90px] overflow-hidden">
                    <div className="flex flex-col w-full h-auto">
                        <TitleText username="พี่อิทาจิ"/>
                        <SearchBar/>
                        <ProblemBar/>
                    </div>
                    <div className="w-full flex flex-col space-y-[16px] overflow-y-auto hide-scrollbar">
                        {problems.map((problem, index) => (
                            <ProblemsTable
                                key={problem.number} 
                                number={problem.number.toString()}
                                title={problem.title} 
                                lesson={problem.lesson} 
                                level={problem.level}
                                attempters={problem.attempters}
                                score={parseFloat(problem.score)}
                                status={problem.status} 
                                isLast={index === problems.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
