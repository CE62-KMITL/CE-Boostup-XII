import Background from "../components/utils/Background";
import Editor from "../components/solve/Editor";

function SolveProblemPage() {
  return (
    <>
        <Background/>
        <div className="flex items-center h-screen px-[80px]">
          <Editor/>

        </div>
    </>
  );
}

export default SolveProblemPage;
