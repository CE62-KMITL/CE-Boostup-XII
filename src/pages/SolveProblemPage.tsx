import { useRef, useEffect, useState } from "react";
import Background from "../components/utils/Background";
import Editor from "../components/solve/Editor";
import Problem from "../components/solve/Problem";
import { useParams } from "react-router-dom";
import { useSaves } from "../hooks/saves.hook";
import LoadingPage from "./LoadingPage";
import { useProblem } from "../hooks/problem.hook";
import { usePopUp } from "../hooks/pop-up.hook";
import { useNavigate } from "react-router-dom";
import { ErrorModelResponse } from "../types/response.type";

function SolveProblemPage() {
  const { problemId } = useParams();
  const navigate = useNavigate();
  const { problem, isLoading: isLoadingProblem } = useProblem(problemId as string);
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


  async function handleCreateSave() {
    try {
      if (!problemId)
        return navigate("/home");
      const response = await createSaveMutation.mutateAsync({ problem: problemId, code: problem?.starterCode as string });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (savesQuery.error && (savesQuery.error as ErrorModelResponse).statusCode === 404) {
      handleCreateSave();
      return navigate(0);
    }
  }, [savesQuery.error]);

  if (savesQuery.isLoading || savesQuery.isError || isLoadingProblem || createSaveMutation.isLoading) {
    return <LoadingPage />;
  }

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