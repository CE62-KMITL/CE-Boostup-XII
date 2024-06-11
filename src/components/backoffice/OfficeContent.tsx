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
import { useCreateProblemStore } from "../../store/zustand/create-problem.zustand";
import { TestcaseType } from "../../types/testcase.type";
import { ProgrammingLanguage } from "../../enum/compile-and-run.enum";
import SuccessCard from "./cards/SuccessCard";
import { useEffect, useState } from "react";
import Popup from "./Popup";
import UploadCard from "./cards/UploadCard";
import { UseMutationResult } from "react-query";
import { ProblemModelResponse, AttachmentModelResponse } from "../../types/response.type";
import { CreateProblemDto } from "../../dto/problem.dto";
import { CreateAttachmentDto } from "../../dto/attachments.dto";

type OfficeContentProps = {
  createProblemMutation: UseMutationResult<ProblemModelResponse, unknown, CreateProblemDto, unknown>;
  createAttachmentMutation: UseMutationResult<AttachmentModelResponse, unknown, CreateAttachmentDto, unknown>
};

function OfficeContent({ createProblemMutation, createAttachmentMutation }: OfficeContentProps) {
  const { testcases, difficulty, hiddenTestcases, selectedTags, file, setDifficulty, setSelectedTags, setTestcases, setHiddenTestcases, setFile } = useCreateProblemStore();
  const [show, setShow] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  function getValidTestcases(testcases: TestcaseType[]) {
    return testcases.filter((testcase) => testcase.input !== "" && testcase.output !== "");
  }

  async function handleCreateProblem() {
    try {
      let fileResponse;
      if (file) {
        fileResponse = await createAttachmentMutation.mutateAsync({
          file: file,
          name: file.name,
        });
      }
      await createProblemMutation.mutateAsync({
        title: formik.values.title.replace(/\n/g, "\\n"),
        description: formik.values.description.replace(/\n/g, "\\n"),
        input: formik.values.input.replace(/\n/g, "\\n"),
        output: formik.values.output.replace(/\n/g, "\\n"),
        hint: formik.values.hint.replace(/\n/g, "\\n"),
        hintCost: parseInt(formik.values.hintCost),
        exampleTestcases: getValidTestcases(testcases),
        starterCode: formik.values.starterCode.replace(/\n/g, "\\n"),
        solution: formik.values.solution.replace(/\n/g, "\\n"),
        bannedFunctions: [formik.values.bannedFunctions.replace(/\n/g, "\\n")],
        difficulty: difficulty,
        testcases: getValidTestcases(hiddenTestcases),
        tags: selectedTags,
        solutionLanguage: ProgrammingLanguage.CPP17,
        score: 100 * difficulty,
        attachments: fileResponse ? [fileResponse.id] : undefined,
      });
      formik.resetForm();
      setDifficulty(1);
      setSelectedTags([]);
      setTestcases(Array(4).fill({ input: "", output: "" }));
      setHiddenTestcases(Array(6).fill({ input: "", output: "" }));
      setFile(null);
      setShowPopup(false);
    } catch (error) {
      console.error(error);
    }
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
    onSubmit: () => setShowPopup(true),
  });

  const starterCodeInputProps = getFieldProps(formik, "starterCode");
  const solutionInputProps = getFieldProps(formik, "solution");

  useEffect(() => {
    if (createProblemMutation.isSuccess) {
      setShow(true);
    }
  }, [createProblemMutation.isSuccess]);

  return (
    <>
      {show && <SuccessCard setShow={setShow} />}
      {showPopup && <Popup setShowPopUp={setShowPopup} handleSubmit={handleCreateProblem} />}
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
          <div className="space-y-[36px]">
            <p className={`text-[18px] font-bold`}>เพิ่มรูปภาพ หรือไฟล์ที่เกี่ยวข้อง</p>
            <UploadCard />
          </div>
          <Button type="submit" className={`${formik.isValid ? "bg-accent" : "bg-[#D7C398] pointer-events-none"} text-white w-[400px] h-[52px] rounded-[8px] font-semibold self-center`} text="ส่งโจทย์เลย" />
        </div>
      </form>
    </>
  );
}

export default OfficeContent;
