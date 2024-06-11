import General from "./sections/General";
import Testcase from "./sections/Testcase";
import HiddenTestcase from "./sections/HiddenTestcase";
import { FormikProps } from "formik";
import CodeMirror from '@uiw/react-codemirror';
import { StreamLanguage } from '@codemirror/language';
import { githubLight } from "@uiw/codemirror-theme-github";
import { cpp } from "@codemirror/legacy-modes/mode/clike";
import Button from "../utils/Button";
import { getFieldProps } from "../../utils/getFieldProps";
import UploadCard from "./cards/UploadCard";
import { CreateProblemValues } from "../../formik/create-problem.formilk";
import { useSearchParams } from "react-router-dom";

type OfficeContentProps = {
  formik: FormikProps<CreateProblemValues>;
};

function OfficeContent({ formik }: OfficeContentProps) {
  const starterCodeInputProps = getFieldProps(formik, "starterCode");
  const solutionInputProps = getFieldProps(formik, "solution");
  const [searchParams] = useSearchParams();

  return (
    <>
      <div className="bg-stone01 mx-20 mb-10 h-fit rounded-lg px-[64px] py-16">
        <General formik={formik} />
        <Testcase />
        <HiddenTestcase />
        <div className="mt-24 flex items-start justify-center flex-col space-y-[70px]">
          <div className="space-y-[36px] w-full">
            <p className={`text-[18px] font-bold ${solutionInputProps.error ? "text-red-600" : "text-stone05"}`}>Solution Code (Source Code)</p>
            <div className="rounded-[8px] overflow-hidden -z-50">
              <CodeMirror
                value={formik.values.solution}
                height={`385px`}
                extensions={[StreamLanguage.define(cpp)]}
                onChange={(v) => formik.setFieldValue("solution", v)}
                theme={githubLight}
              />
            </div>
          </div>
          <div className="space-y-[36px] w-full">
            <p className={`text-[18px] font-bold ${starterCodeInputProps.error ? "text-red-600" : "text-stone05"}`}>Starter Code (Skeleton Code)</p>
            <div className="rounded-[8px] overflow-hidden">
              <CodeMirror
                value={formik.values.starterCode}
                height={`385px`}
                extensions={[StreamLanguage.define(cpp)]}
                onChange={(v) => formik.setFieldValue("starterCode", v)}
                theme={githubLight}
              />
            </div>
          </div>
          <div className="space-y-[36px]">
            <p className={`text-[18px] font-bold`}>เพิ่มรูปภาพ หรือไฟล์ที่เกี่ยวข้อง</p>
            <UploadCard />
          </div>
          <Button type="submit" className={`${formik.isValid && searchParams.get("problemId") ? "bg-accent" : "bg-[#D7C398] pointer-events-none"} text-white w-[400px] h-[52px] rounded-[8px] font-semibold self-center`} text="ส่งโจทย์เลย" />
        </div>
      </div>
    </>
  );
}

export default OfficeContent;
