import Button from "../components/utils/Button";
import General from "./sections/General";
import Testcase from "./sections/Testcase";
import HiddenTestcase from "./sections/HiddenTestcase";

function OfficeContent() {
  return (
    <>
      <div className="bg-stone01 mx-20 mb-10 h-[3100px] rounded-lg px-[64px] py-16">
        <General/>
        <Testcase/>
        <HiddenTestcase/>
        
      </div>
    </>
  );
}

export default OfficeContent;
