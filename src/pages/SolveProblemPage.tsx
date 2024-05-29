import { useRef, useEffect, useState } from "react";
import Background from "../components/utils/Background";
import Editor from "../components/solve/Editor";
import Problem from "../components/solve/Problem";
import { useParams } from "react-router-dom";
import { useSaves } from "../components/hooks/saves.hook";
import LoadingPage from "./LoadingPage";
import { useProblem } from "../components/hooks/problem.hook";
import { usePopUp } from "../components/hooks/popUp.hook";

function SolveProblemPage() {
  const { problemId } = useParams();
  const { problem, isLoading } = useProblem(problemId as string);
  const { savesQuery, updateSaveMutation, createSaveMutation } = useSaves(problemId as string);
  const { popUp, popUpComponents, content } = usePopUp();

  const boxRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const event = addEventListener('resize', () => {
      setHeight(boxRef.current?.clientHeight || 0);
    });
    return () => removeEventListener('resize', () => event);
  }, [boxRef.current, savesQuery.isSuccess]);

  useEffect(() => {
    setHeight(boxRef.current?.clientHeight || 0);
  }, [boxRef.current, savesQuery.isSuccess]);

  if (savesQuery.isLoading || isLoading)
    return <LoadingPage />;

  return (
    <>
      {popUp && popUpComponents(content)[popUp]}
      <div className="flex justify-center">
        <Background />
        <div className="flex items-center h-screen w-[90vw] justify-center py-[33px]" ref={boxRef}>
          <Editor starterCode={problem?.starterCode as string} height={height} problemId={problemId} savesQuery={savesQuery} updateSaveMutation={updateSaveMutation} createSaveMutation={createSaveMutation} />
          <Problem height={height} problem={problem} />
        </div>
      </div>
    </>
  );
}

export default SolveProblemPage;