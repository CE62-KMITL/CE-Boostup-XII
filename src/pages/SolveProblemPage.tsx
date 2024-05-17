import { useRef, useEffect, useState } from "react";
import Background from "../components/utils/Background";
import Editor from "../components/solve/Editor";
import Problem from "../components/solve/Problem";

function SolveProblemPage() {
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
        <Editor height={height} />
        <Problem height={height} />
      </div>
    </div>
  );
}

export default SolveProblemPage;
