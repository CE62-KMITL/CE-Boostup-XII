import Editor from "../components/solve/Editor";
import Problem from "../components/solve/Problem";

function SolveProblemPage() {
  return (
    <div className="flex w-screen h-screen justify-center items-center default-background">
        <div className="flex justify-between bg-stone01 bg-opacity-20 
        w-[calc(100vw-64px)] h-[calc(100vh-32px)]">
            <Editor/>
            <Problem/>
        </div>
    </div>
  );
}

export default SolveProblemPage;
