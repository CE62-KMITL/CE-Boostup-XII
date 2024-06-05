import Button from "../components/utils/Button";
import InputPlain from "../../utils/InputPlain";

function General() {
  return (
    <>
      <p className="text-[24px] text-stone05 font-bold">ข้อมูลทั่วไป</p>
      <div className="flex mt-8">
        <div className="flex-1 flex flex-col">
          <div className="input-container-problem w-full pr-12 box-border">
            <InputPlain
              label="ชื่อโจทย์ *"
              subtext=""
              type="text"
              placeholder=" "
              required={true}
              inputClass="h-[44px] px-[16px] border-stone03 border-[1px] rounded-[10px] text-stone04 text-[18px]"
              labelClass="text-stone04 text-[20px] font-[700] mt-4"
              pClass="mb-2 text-stone05"
              // func={(e) => setEmail(e.target.value)}
            />
            <InputPlain
              label="คำอธิบายโจทย์ *"
              subtext="แสดงให้เห็นถึงที่มา ความสำคัญ ลักษณะของโปรแกรม หรือบรรยายโจทย์ว่าต้องการให้ น้องทำสิ่งใด สามารถอธิบายอย่างไรก็ได้(ห้ามมีการเหยียดหรือเสียดสี หรือส่อทางเพศ)"
              type="text"
              placeholder=" "
              required={true}
              inputClass="h-[76px] px-[16px] border-stone03 border-[1px] rounded-[10px] text-stone04 text-[18px]"
              labelClass="text-stone04 text-[20px] font-[700] mt-4"
              pClass="mb-2 text-stone05"
              // func={(e) => setEmail(e.target.value)}
            />
            <InputPlain
              label="คำอธิบาย Input *"
              subtext="เช่น บรรทัดที่ 1 รับตัวเลขจำนวนเต็ม และตั้งแต่บรรทัดที่ 2 ใส่ข้อความลงไป เป็นต้น"
              type="text"
              placeholder=" "
              required={true}
              inputClass="h-[76px] px-[16px] border-stone03 border-[1px] rounded-[10px] text-stone04 text-[18px]"
              labelClass="text-stone04 text-[20px] font-[700] mt-4"
              pClass="mb-2 text-stone05"
              // func={(e) => setEmail(e.target.value)}
            />
            <InputPlain
              label="คำอธิบาย Output *"
              subtext="เช่น แสดงผลเป็นรูปแบบข้อความในบรรทัดที่ 1 ว่า “Hello CE”"
              type="text"
              placeholder=" "
              required={true}
              inputClass="h-[76px] px-[16px] border-stone03 border-[1px] rounded-[10px] text-stone04 text-[18px]"
              labelClass="text-stone04 text-[20px] font-[700] mt-4"
              pClass="mb-2 text-stone05"
              // func={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="input-container-problem w-full pr-12 box-border">
            <InputPlain
              label="คำใบ้"
              subtext=""
              type="text"
              placeholder=" "
              required={true}
              inputClass="h-[76px] px-[16px] border-stone03 border-[1px] rounded-[10px] text-stone04 text-[18px]"
              labelClass="text-stone04 text-[20px] font-[700] mt-4"
              pClass="mb-2 text-stone05"
              // func={(e) => setEmail(e.target.value)}
            />
            <InputPlain
              label="ข้อจำกัด/ขอบเขต"
              subtext="เช่น ข้อมูลที่ Input จะมีค่าตั้งแต่ 0 - 1,000,000 หรือ หากมีเศษ ให้ทำการปัดขึ้น"
              type="text"
              placeholder=" "
              required={true}
              inputClass="h-[44px] px-[16px] border-stone03 border-[1px] rounded-[10px] text-stone04 text-[18px]"
              labelClass="text-stone04 text-[20px] font-[700] mt-4"
              pClass="mb-2 text-stone05"
              // func={(e) => setEmail(e.target.value)}
            />
            <div className="flex justify-between w-[95%]">
              <InputPlain
                label="ราคาคำใบ้ *"
                subtext="คะแนนที่เสียในการเปิดคำใบ้"
                type="text"
                placeholder=" "
                required={true}
                inputClass="w-[200px] h-[44px] px-[16px] border-stone03 border-[1px] rounded-[10px] text-stone04 text-[18px]"
                labelClass="text-stone04 text-[20px] font-[700] mt-4"
                pClass="mb-2 text-stone05"
                // func={(e) => setEmail(e.target.value)}
              />
              <InputPlain
                label="ระดับความยากของโจทย์ *"
                subtext="คะแนนที่เสียในการเปิดคำใบ้"
                type="text"
                placeholder=" "
                required={true}
                inputClass="hidden"
                labelClass="text-stone04 text-[20px] font-[700] mt-4"
                pClass="mb-2 text-stone05"
                // func={(e) => setEmail(e.target.value)}
              />
            </div>
            <InputPlain
              label="เนื้อหาของโจทย์ *"
              subtext="เนื้อหาความรู้ที่เกี่ยวข้องในการทำโจทย์ข้อนั้น ๆ สามารถเลือกได้หลายหัวข้อ "
              type="text"
              placeholder=" "
              required={true}
              inputClass="hidden"
              labelClass="text-stone04 text-[20px] font-[700] mt-4"
              pClass="mb-2 text-stone05"
              // func={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default General;
