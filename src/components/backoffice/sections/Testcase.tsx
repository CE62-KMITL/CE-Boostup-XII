import TestcaseInput from "../TestcaseInput";

function Testcase() {
  return (
    <>
      <p className="mt-16 text-[24px] text-stone05 font-bold">Test Case</p>
      <p className="text-stone05">
        แสดงตัวอย่าง Input และ Output ของโปรแกรม เช่น ถ้า Input เลข 1 ให้แสดงผล
        Output เป็น เลข 2 โดยข้อมูลที่กรอกในตัวอย่าง
        จะเป็นข้อมูลเดียวกันกับข้อมูลจริงที่โปรแกรม ทำการประมวลผล
        และแสดงผลลัพธ์ออกมา
      </p>
      <div className="flex mt-8">
        <div className="flex-1 flex flex-col">
          <div className="input-container-problem w-full pr-12 box-border">
            <TestcaseInput type="testcases" index={1} />
            <TestcaseInput type="testcases" index={3} />
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="input-container-problem w-full pr-12 box-border">
            <TestcaseInput type="testcases" index={2} />
            <TestcaseInput type="testcases" index={4} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Testcase;
