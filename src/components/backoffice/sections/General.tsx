import InputPlain from "../../utils/InputPlain";
import Category from "../Category";
import { CreateProblemValues } from "../../../formik/create-problem.formilk";
import { FormikProps } from "formik";
import { useAppSelector } from "../../../store/hook";
import { useCreateProblemStore } from "../../../store/zustand/create-problem.zustand";
import { getFieldProps } from "../../../utils/getFieldProps";

type GeneralProps = {
  formik: FormikProps<CreateProblemValues>;
};

export default function General({ formik }: GeneralProps) {
  const problemTags = useAppSelector((state) => state.problemTags.problemTags);
  const { setDifficulty, difficulty, selectedTags, setSelectedTags } = useCreateProblemStore();

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < difficulty; i++) {
      stars.push(
        <svg
          key={i}
          onClick={() => recheckDifficulty(i + 1)}
          className="w-[20px] h-[20px] cursor-pointer"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.64371 1.6665L12.127 6.88317L17.6801 7.72484L13.6619 11.7832L14.6102 17.5165L9.64371 14.8082L4.67721 17.5165L5.6255 11.7832L1.6073 7.72484L7.16046 6.88317L9.64371 1.6665Z"
            fill="#E2AD39"
            stroke="#E2AD39"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }
    for (let j = 0; j < 5 - difficulty; j++) {
      stars.push(
        <svg
          key={j + 3}
          onClick={() => recheckDifficulty(j + difficulty + 1)}
          className="w-[20px] h-[20px] cursor-pointer"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.0003 1.66675L12.5753 6.88341L18.3337 7.72508L14.167 11.7834L15.1503 17.5167L10.0003 14.8084L4.85033 17.5167L5.83366 11.7834L1.66699 7.72508L7.42533 6.88341L10.0003 1.66675Z"
            stroke="#E2AD39"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }
    return stars;
  };

  const recheckDifficulty = (selectedDifficulty: number) => {
    setDifficulty(selectedDifficulty);
  };

  const titleInputProps = getFieldProps(formik, "title");
  const descriptionInputProps = getFieldProps(formik, "description");
  const hintInputProps = getFieldProps(formik, "hint");
  const hintCostInputProps = getFieldProps(formik, "hintCost");
  const inputInputProps = getFieldProps(formik, "input");
  const outputInputProps = getFieldProps(formik, "output");
  const bannedFunctionsInputProps = getFieldProps(formik, "bannedFunctions");

  return (
    <>
      <p className="text-[24px] text-stone05 font-bold">ข้อมูลทั่วไป</p>
      <div className="flex mt-8 flex-col xl:flex-row">
        <div className="flex-1 flex flex-col">
          <div className="input-container-problem w-full pr-12 box-border">
            <InputPlain
              {...titleInputProps}
              label="ชื่อโจทย์ *"
              subtext=""
              type="text"
              placeholder=" "
              required={true}
              value={formik.values.title}
              inputClass="h-[44px] px-[16px] border-[1px] rounded-[10px] text-[18px] focus:border-[1px]"
              labelClass="text-[20px] font-[700] mt-4"
              pClass="mb-2 text-stone05"
              func={(e) => formik.setFieldValue("title", e.target.value)}
            />
            <InputPlain
              {...descriptionInputProps}
              label="คำอธิบายโจทย์ *"
              subtext="แสดงให้เห็นถึงที่มา ความสำคัญ ลักษณะของโปรแกรม หรือบรรยายโจทย์ว่าต้องการให้ น้องทำสิ่งใด สามารถอธิบายอย่างไรก็ได้(ห้ามมีการเหยียดหรือเสียดสี หรือส่อทางเพศ)"
              type="textarea"
              placeholder=" "
              required={true}
              value={formik.values.description}
              inputClass="h-[76px] px-[16px] border-[1px] rounded-[10px] text-[18px]"
              labelClass="text-[20px] font-[700] mt-4"
              pClass="mb-2 text-stone05"
              func={(e) => formik.setFieldValue("description", e.target.value)}
            />
            <InputPlain
              {...inputInputProps}
              label="คำอธิบาย Input *"
              subtext="เช่น บรรทัดที่ 1 รับตัวเลขจำนวนเต็ม และตั้งแต่บรรทัดที่ 2 ใส่ข้อความลงไป เป็นต้น"
              type="textarea"
              placeholder=" "
              value={formik.values.input}
              required={true}
              inputClass="h-[76px] px-[16px] border-[1px] rounded-[10px] text-[18px]"
              labelClass="text-[20px] font-[700] mt-4"
              pClass="mb-2 text-stone05"
              func={(e) => formik.setFieldValue("input", e.target.value)}
            />
            <InputPlain
              {...outputInputProps}
              label="คำอธิบาย Output *"
              subtext="เช่น แสดงผลเป็นรูปแบบข้อความในบรรทัดที่ 1 ว่า “Hello CE”"
              type="textarea"
              placeholder=" "
              value={formik.values.output}
              required={true}
              inputClass="h-[76px] px-[16px] border-[1px] rounded-[10px] text-[18px]"
              labelClass="text-[20px] font-[700] mt-4"
              pClass="mb-2 text-stone05"
              func={(e) => formik.setFieldValue("output", e.target.value)}
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="input-container-problem w-full pr-12 box-border">
            <InputPlain
              {...hintInputProps}
              label="คำใบ้"
              subtext=""
              type="textarea"
              value={formik.values.hint}
              placeholder=" "
              required={true}
              inputClass="h-[76px] px-[16px] border-[1px] rounded-[10px] text-[18px]"
              labelClass="text-[20px] font-[700] mt-4"
              pClass="mb-2 text-stone05"
              func={(e) => formik.setFieldValue("hint", e.target.value)}
            />
            <InputPlain
              {...bannedFunctionsInputProps}
              label="ข้อจำกัด/ขอบเขต"
              subtext="เช่น ข้อมูลที่ Input จะมีค่าตั้งแต่ 0 - 1,000,000 หรือ หากมีเศษ ให้ทำการปัดขึ้น"
              type="text"
              placeholder=" "
              value={formik.values.bannedFunctions}
              required={true}
              inputClass="h-[44px] px-[16px] border-[1px] rounded-[10px] text-[18px]"
              labelClass="text-[20px] font-[700] mt-4"
              pClass="mb-2 text-stone05"
              func={(e) => formik.setFieldValue("bannedFunctions", e.target.value)}
            />
            <div className="flex justify-between w-[95%]">
              <InputPlain
                {...hintCostInputProps}
                label="ราคาคำใบ้ *"
                subtext="คะแนนที่เสียในการเปิดคำใบ้"
                type="number"
                value={formik.values.hintCost}
                placeholder=" "
                required={true}
                inputClass="w-[200px] h-[44px] px-[16px] border-[1px] rounded-[10px] text-[18px]"
                labelClass="text-[20px] font-[700] mt-4"
                pClass="mb-2 text-stone05"
                func={(e) => formik.setFieldValue("hintCost", e.target.value)}
              />
              <div className="flex flex-col">
                <InputPlain
                  label="ระดับความยากของโจทย์ *"
                  subtext="คะแนนที่เสียในการเปิดคำใบ้"
                  type="text"
                  placeholder=" "
                  required={true}
                  inputClass="hidden"
                  labelClass="text-[20px] font-[700] mt-4"
                  pClass="mb-2 text-stone05"
                />
                <div className="flex items-center space-x-[4px]">
                  {renderStars()}
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <InputPlain
                label="เนื้อหาของโจทย์ *"
                subtext="เนื้อหาความรู้ที่เกี่ยวข้องในการทำโจทย์ข้อนั้น ๆ สามารถเลือกได้หลายหัวข้อ "
                type="text"
                placeholder=" "
                required={true}
                inputClass="hidden"
                labelClass="text-[20px] font-[700] mt-4"
                pClass="mb-2 text-stone05"
              />
              <div className="flex flex-wrap">
                {
                  problemTags?.map((tag) => (
                    <Category
                      key={tag.id}
                      tag={tag}
                      onClick={(value) => {
                        if (selectedTags.includes(value))
                          setSelectedTags(selectedTags.filter((tag) => tag !== value));
                        else
                          setSelectedTags([...selectedTags, value]);
                      }}
                    />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
