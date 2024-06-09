import { useRef, useEffect, useState } from "react";
import Background from "../components/utils/Background";
import EditorZone from "../components/checkmode/EditorZone";
import ProblemZone from "../components/checkmode/ProblemZone";
import { useParams } from "react-router-dom";
import { useSaves } from "../hooks/saves.hook";
import LoadingPage from "./LoadingPage";
import { useProblem } from "../hooks/problem.hook";
import { usePopUp } from "../hooks/pop-up.hook";
import { useNavigate } from "react-router-dom";
import { ErrorModelResponse } from "../types/response.type";

function CheckModePage() {
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
        await createSaveMutation.mutateAsync({ problem: problemId, code: problem?.starterCode as string });
        return navigate(0);
      } catch (error) {
        console.error(error);
      }
    }
  
    useEffect(() => {
      if (savesQuery.error && (savesQuery.error as ErrorModelResponse).statusCode === 404) {
        handleCreateSave();
      }
    }, [savesQuery.error]);
  
    if (savesQuery.isLoading || savesQuery.isError || isLoadingProblem || createSaveMutation.isLoading)
      return <LoadingPage />;

  return (
    <>
    {popUp !== null && popUpComponents(content)[popUp]}
      <div className="flex justify-center">
        <Background />
        <div className="flex items-center h-screen w-[90vw] justify-center py-[33px]">
            <div className="flex justify-center gap-[24px]
            w-full h-full min-w-[720px] max-w-[1360px] min-h-[640px] max-h-[925px] my-[30px]" ref={boxRef}>
                <EditorZone starterCode={problem?.starterCode as string} height={height}
                problemId={problemId} savesQuery={savesQuery} updateSaveMutation={updateSaveMutation} createSaveMutation={createSaveMutation} />
                <ProblemZone height={height} problem={problem} />
            </div>
        </div>
      </div>
    </>
  );
}

export default CheckModePage;