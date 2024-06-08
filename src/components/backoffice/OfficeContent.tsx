import Button from "../utils/Button";
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
        <div className="mt-24 flex items-center justify-center flex-col">
          
        <Button
        type={4}
        mode={0}
        validate={true}
        text="สุ่มโจทย์"
        img=""
        ClickFunc={() => (window.location.href = "https://google.com/")}
      />  
        </div>
      </div>
    </>
  );
}

export default OfficeContent;
