import Editor from "../components/solve/Editor";
import Problem from "../components/solve/Problem";
import Button from "../components/utils/Button";
import LanguageDropdown from "../components/solve/utils/LanguageDropdown";
function SolveProblemPage() {
  return (
    <div>
        <Button type={1} mode={0} text="ตรวจสอบ" img=""/>
        <Button type={1} mode={1} text="กลับ" img="src/assets/back.svg"/>
        <Button type={1} mode={2} text="ส่ง" img="src/assets/submit.svg"/>
        <LanguageDropdown/>
    </div>
    // <div className="flex w-screen h-screen justify-center items-center default-background">
    //     <div className="flex justify-between bg-stone01 bg-opacity-20 
    //     w-[calc(100vw-64px)] h-[calc(100vh-32px)]">
    //         <Editor/>
    //         <Problem/>
    //     </div>
    // </div>
  );
}

export default SolveProblemPage;
