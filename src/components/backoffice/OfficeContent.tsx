import General from "./sections/General";
import Testcase from "./sections/Testcase";
import HiddenTestcase from "./sections/HiddenTestcase";
import { useFormik } from "formik";
import { CreateProblemValidationSchema, CreateProblemValues, emptyCreateProblemValues } from "../../formik/create-problem.formilk";
import CodeMirror from '@uiw/react-codemirror';
import { StreamLanguage } from '@codemirror/language';
import { githubLight } from "@uiw/codemirror-theme-github";
import { cpp } from "@codemirror/legacy-modes/mode/clike";
import Button from "../utils/Button";
import { getFieldProps } from "../../utils/getFieldProps";

function OfficeContent() {
  async function handleCreateProblem() {
    // replace(/\n/g, "\\n");
  }

  const formik = useFormik<CreateProblemValues>({
    initialValues: {
      ...emptyCreateProblemValues,
    },
    initialErrors: {
      ...emptyCreateProblemValues,
    },
    validateOnChange: true,
    enableReinitialize: true,
    validationSchema: CreateProblemValidationSchema,
    onSubmit: handleCreateProblem,
  });

  const starterCodeInputProps = getFieldProps(formik, "starterCode");
  const solutionInputProps = getFieldProps(formik, "solution");

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="bg-stone01 mx-20 mb-10 h-fit rounded-lg px-[64px] py-16">
        <General formik={formik} />
        <Testcase />
        <HiddenTestcase />
        <div className="mt-24 flex items-start justify-center flex-col space-y-[70px]">
          <div className="space-y-[36px] w-full">
            <p className={`text-[18px] font-bold ${starterCodeInputProps.error ? "text-red-600" : "text-stone05"}`}>Solution Code (Source Code)</p>
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
          <div className="space-y-[36px] w-full">
            <p className={`text-[18px] font-bold ${solutionInputProps.error ? "text-red-600" : "text-stone05"}`}>Solution Code (Source Code)</p>
            <div className="rounded-[8px] overflow-hidden">
              <CodeMirror
                value={formik.values.solution}
                height={`385px`}
                extensions={[StreamLanguage.define(cpp)]}
                onChange={(v) => formik.setFieldValue("solution", v)}
                theme={githubLight}
              />
            </div>
          </div>
          <Button type="submit" className={`${formik.isValid ? "bg-accent" : "bg-[#D7C398] pointer-events-none"} text-white w-[400px] h-[52px] rounded-[8px] font-semibold self-center`} text="ส่งโจทย์เลย" />
        </div>
      </form>
    </>
  );
}

export default OfficeContent;
