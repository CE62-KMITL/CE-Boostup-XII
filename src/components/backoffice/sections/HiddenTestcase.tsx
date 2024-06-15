import TestcaseInput from "../TestcaseInput";

function HiddenTestcase() {
  return (
    <>
      <p className="mt-16 text-[24px] text-stone05 font-bold">Hidden Test Case *</p>
      <p className="text-stone05">
        คือ Test Case ที่จะถูกซ่อนไว้ น้องจะไม่เห็นถึง Test Case เหล่านี้
      </p>
      <div className="flex mt-8">
        <div className="flex-1 flex flex-col">
          <div className="input-container-problem w-full pr-12 box-border">
            <TestcaseInput type="hiddenTestcases" index={1} />
            <TestcaseInput type="hiddenTestcases" index={3} />
            <TestcaseInput type="hiddenTestcases" index={5} />
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="input-container-problem w-full pr-12 box-border">
            <TestcaseInput type="hiddenTestcases" index={2} />
            <TestcaseInput type="hiddenTestcases" index={4} />
            <TestcaseInput type="hiddenTestcases" index={6} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HiddenTestcase;
