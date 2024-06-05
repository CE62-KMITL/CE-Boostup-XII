import Button from "../components/utils/Button";
import InputPlain from "../../utils/InputPlain";

function HiddenTestcase() {
  return (
    <>
      <p className="mt-16 text-[24px] text-stone05 font-bold">Hidden Test Case</p>
      <p className="text-stone05">
      คือ Test Case ที่จะถูกซ่อนไว้ น้องจะไม่เห็นถึง Test Case เหล่านี้
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
            <div className="flex ">
              <InputPlain
                label="ตัวอย่างที่ 5 *"
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
            <div className="flex ">
              <InputPlain
                label="ตัวอย่างที่ 6 *"
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

export default HiddenTestcase;
