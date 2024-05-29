import { useRef, useEffect, useState } from "react";
import Background from "../components/utils/Background";
import Editor from "../components/solve/Editor";
import Problem from "../components/solve/Problem";
import { useParams } from "react-router-dom";
import { useSaves } from "../components/hooks/saves.hook";
import LoadingPage from "./LoadingPage";
import { store } from "../store/store";
import { ErrorModelResponse } from "../types/response.type";

function SolveProblemPage() {
  const { problemId } = useParams();
  const { savesQuery, updateSaveMutation, createSaveMutation } = useSaves(problemId as string);
 
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

  if (savesQuery.isLoading)
    return <LoadingPage />;

  return (
    <div className="flex justify-center">
      <Background />
      <div className="flex items-center h-screen w-[90vw] justify-center py-[33px]" ref={boxRef}>
        <Editor height={height} problemId={problemId} savesQuery={savesQuery} updateSaveMutation={updateSaveMutation} createSaveMutation={createSaveMutation} />
        <Problem height={height} problemId={problemId} />
      </div>
    </div>
  );
}

export default SolveProblemPage;
