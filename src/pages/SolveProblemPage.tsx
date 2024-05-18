import { useRef, useEffect, useState } from "react";
import Background from "../components/utils/Background";
import Editor from "../components/solve/Editor";
import Problem from "../components/solve/Problem";
import { useParams } from "react-router-dom";

function SolveProblemPage() {
  const { problemId } = useParams();
  const boxRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const event = addEventListener('resize', () => {
      setHeight(boxRef.current?.clientHeight || 0);
    });
    return () => removeEventListener('resize', () => event);
  }, [boxRef.current]);

  useEffect(() => {
    setHeight(boxRef.current?.clientHeight || 0);
  }, [boxRef.current]);

  return (
    <div className="flex justify-center">
      <Background />
      <div className="flex items-center h-screen w-[90vw] justify-center py-[33px]" ref={boxRef}>
        <Editor height={height} problemId={problemId} />
        <Problem height={height} problemId={problemId} />
      </div>
    </div>
  );
}

export default SolveProblemPage;
