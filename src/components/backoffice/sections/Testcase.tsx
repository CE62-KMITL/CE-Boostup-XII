import Button from "../components/utils/Button";
import InputPlain from "../../utils/InputPlain";

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
          <div className="flex ">
              <InputPlain
                label="ตัวอย่างที่ 1 *"
                subtext="Input :"
                type="text"
                placeholder=" "
                required={true}
                inputClass="h-[76px] mr-[14px] px-[16px] border-stone03 border-[1px] rounded-[10px] text-stone04 text-[18px]"
                labelClass="text-stone04 text-[20px] font-[700] mt-4"
                pClass="mb-2 text-stone05"
                // func={(e) => setEmail(e.target.value)}
              />
              <InputPlain
                label=""
                subtext="Output :"
                type="text"
                placeholder=" "
                required={true}
                inputClass="h-[76px] ml-[14px]  px-[16px] border-stone03 border-[1px] rounded-[10px] text-stone04 text-[18px]"
                labelClass="text-stone04 text-[20px] font-[700] mt-[46px]"
                pClass="ml-[14px]  mb-2 text-stone05"
                // func={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex ">
              <InputPlain
                label="ตัวอย่างที่ 3 *"
                subtext="Input :"
                type="text"
                placeholder=" "
                required={true}
                inputClass="h-[76px] mr-[14px] px-[16px] border-stone03 border-[1px] rounded-[10px] text-stone04 text-[18px]"
                labelClass="text-stone04 text-[20px] font-[700] mt-4"
                pClass="mb-2 text-stone05"
                // func={(e) => setEmail(e.target.value)}
              />
              <InputPlain
                label=""
                subtext="Output :"
                type="text"
                placeholder=" "
                required={true}
                inputClass="h-[76px] ml-[14px]  px-[16px] border-stone03 border-[1px] rounded-[10px] text-stone04 text-[18px]"
                labelClass="text-stone04 text-[20px] font-[700] mt-[46px]"
                pClass="ml-[14px]  mb-2 text-stone05"
                // func={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="input-container-problem w-full pr-12 box-border">
          <div className="flex ">
              <InputPlain
                label="ตัวอย่างที่ 2 *"
                subtext="Input :"
                type="text"
                placeholder=" "
                required={true}
                inputClass="h-[76px] mr-[14px] px-[16px] border-stone03 border-[1px] rounded-[10px] text-stone04 text-[18px]"
                labelClass="text-stone04 text-[20px] font-[700] mt-4"
                pClass="mb-2 text-stone05"
                // func={(e) => setEmail(e.target.value)}
              />
              <InputPlain
                label=""
                subtext="Output :"
                type="text"
                placeholder=" "
                required={true}
                inputClass="h-[76px] ml-[14px]  px-[16px] border-stone03 border-[1px] rounded-[10px] text-stone04 text-[18px]"
                labelClass="text-stone04 text-[20px] font-[700] mt-[46px]"
                pClass="ml-[14px]  mb-2 text-stone05"
                // func={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex ">
              <InputPlain
                label="ตัวอย่างที่ 4 *"
                subtext="Input :"
                type="text"
                placeholder=" "
                required={true}
                inputClass="h-[76px] mr-[14px] px-[16px] border-stone03 border-[1px] rounded-[10px] text-stone04 text-[18px]"
                labelClass="text-stone04 text-[20px] font-[700] mt-4"
                pClass="mb-2 text-stone05"
                // func={(e) => setEmail(e.target.value)}
              />
              <InputPlain
                label=""
                subtext="Output :"
                type="text"
                placeholder=" "
                required={true}
                inputClass="h-[76px] ml-[14px]  px-[16px] border-stone03 border-[1px] rounded-[10px] text-stone04 text-[18px]"
                labelClass="text-stone04 text-[20px] font-[700] mt-[46px]"
                pClass="ml-[14px]  mb-2 text-stone05"
                // func={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testcase;
