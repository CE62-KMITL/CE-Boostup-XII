import Background from "../components/utils/Background";
import OptionBar from "../components/solve/OptionBar";
const Language = [
  ["c", "C"],
  ["cpp", "C++"],
  ["py", "Python"],
];

function SolveProblemPage() {
  return (
    <div>
      <Background/>
        <div className="flex w-screen h-screen justify-center items-center">

        <OptionBar items={Language} />
        </div>
    </div>
  );
}

export default SolveProblemPage;
