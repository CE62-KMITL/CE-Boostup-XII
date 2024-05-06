import NavBar from "../components/utils/NavBar";

import TitleText from "../components/home/TitleText";
import SearchBar from "../components/home/SearchBar";
import ProblemBar from "../components/home/ProblemBar";
import ProblemsTable from "../components/home/ProblemsTable";

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
        { number: 13, title: "Problem 13", lesson: "Lesson 13", level: 5, attempters: 8, score: "85", status: "pass" },
        { number: 14, title: "Problem 14", lesson: "Lesson 14", level: 2, attempters: 4, score: "115", status: "empty" },
        { number: 15, title: "Problem 15", lesson: "Lesson 15", level: 4, attempters: 6, score: "75", status: "unpass" },
        { number: 16, title: "Problem 16", lesson: "Lesson 16", level: 3, attempters: 9, score: "95", status: "pass" },
        { number: 17, title: "Problem 17", lesson: "Lesson 17", level: 1, attempters: 3, score: "105", status: "empty" },
        { number: 18, title: "Problem 18", lesson: "Lesson 18", level: 5, attempters: 7, score: "85", status: "unpass" },
        { number: 19, title: "Problem 19", lesson: "Lesson 19", level: 2, attempters: 5, score: "115", status: "pass" },
        { number: 20, title: "Problem 20", lesson: "Lesson 20", level: 4, attempters: 4, score: "75", status: "empty" }
    ];

    return (
        <div className="flex justify-center items-center default-background w-screen h-screen">
            <NavBar/>
            <div className="w-[90%] min-w-[1320px] max-w-[1640px] h-[80%] min-h-[600px] max-h-[1080px] overflow-hidden">
                <div className="flex flex-col justify-end w-full h-[40%] min-h-[250px] max-h-[300px]">
                    <TitleText username="น้องต้นกล้า"/>
                    <SearchBar/>
                    <ProblemBar/>
                </div>
                
                <div className="w-full h-[60%] overflow-y-auto hide-scrollbar">
                    {problems.map(problem => (
                        <ProblemsTable 
                            key={problem.number} 
                            number={problem.number.toString()}
                            title={problem.title} 
                            lesson={problem.lesson} 
                            level={problem.level}
                            attempters={problem.attempters}
                            score={parseFloat(problem.score)}
                            status={problem.status} 
                        />
                    ))}
                </div>
                
            </div>
        </div>
    );
}

export default HomePage;
