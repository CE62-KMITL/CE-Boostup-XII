import Background from "../components/utils/Background";
import OfficeHeader from "../components/backoffice/OfficeHeader";
import OfficeContent from "../components/backoffice/OfficeContent";
import LoadingPage from "./LoadingPage";
import { useProblems } from "../hooks/problems.hook";
import { useAttachment } from "../hooks/attachment.hook";
import { useProblem } from "../hooks/problem.hook";
import { useSearchParams } from "react-router-dom";
import { PublicationStatus } from "../enum/problem.enum";
import { useFormik } from "formik";
import { CreateProblemValidationSchema, CreateProblemValues, emptyCreateProblemValues } from "../formik/create-problem.formilk";
import { useCreateProblemStore } from "../store/zustand/create-problem.zustand";
import { useState, useEffect } from "react";
import { ProgrammingLanguage } from "../enum/compile-and-run.enum";
import { TestcaseType } from "../types/testcase.type";
import Popup from "../components/backoffice/Popup";
import SuccessCard from "../components/backoffice/cards/SuccessCard";
import { ErrorModelResponse } from "../types/response.type";

function BackOfficePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { createProblemMutation } = useProblems();
  const { createAttachmentMutation } = useAttachment();
  const { updateProblemMutation } = useProblem(searchParams.get("problemId") as string);
  const { testcases, difficulty, hiddenTestcases, selectedTags, file, setDifficulty, setSelectedTags, setTestcases, setHiddenTestcases, setFile } = useCreateProblemStore();
  const [show, setShow] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  function getValidTestcases(testcases: TestcaseType[]) {
    return testcases.filter((testcase) => testcase.input !== "" && testcase.output !== "");
  }

  async function handleSaveProblem() {
    try {
      let fileResponse;
      if (file) {
        fileResponse = await createAttachmentMutation.mutateAsync({
          file: file,
          name: file.name,
        });
      }
      if (searchParams.get("problemId") === null) {
        const response = await createProblemMutation.mutateAsync({
          title: formik.values.title.replace(/\n/g, "\\n"),
          description: formik.values.description.replace(/\n/g, "\\n"),
          input: formik.values.input.replace(/\n/g, "\\n"),
          output: formik.values.output.replace(/\n/g, "\\n"),
          hint: formik.values.hint.replace(/\n/g, "\\n"),
          hintCost: parseInt(formik.values.hintCost),
          exampleTestcases: getValidTestcases(testcases),
          starterCode: formik.values.starterCode,
          solution: formik.values.solution,
          bannedFunctions: [formik.values.bannedFunctions.replace(/\n/g, "\\n")],
          difficulty: difficulty,
          testcases: getValidTestcases(hiddenTestcases),
          tags: selectedTags,
          solutionLanguage: ProgrammingLanguage.CPP17,
          score: 100 * difficulty,
          attachments: fileResponse ? [fileResponse.id] : undefined,
          allowedHeaders: ["stdio.h"],
        });
        setSearchParams({ problemId: response.id });
      } else {
        await updateProblemMutation.mutateAsync({
          title: formik.values.title.replace(/\n/g, "\\n"),
          description: formik.values.description.replace(/\n/g, "\\n"),
          input: formik.values.input.replace(/\n/g, "\\n"),
          output: formik.values.output.replace(/\n/g, "\\n"),
          hint: formik.values.hint.replace(/\n/g, "\\n"),
          hintCost: parseInt(formik.values.hintCost),
          exampleTestcases: getValidTestcases(testcases),
          starterCode: formik.values.starterCode,
          solution: formik.values.solution,
          bannedFunctions: [formik.values.bannedFunctions.replace(/\n/g, "\\n")],
          difficulty: difficulty,
          testcases: getValidTestcases(hiddenTestcases),
          tags: selectedTags,
          solutionLanguage: ProgrammingLanguage.CPP17,
          score: 100 * difficulty,
          attachments: fileResponse ? [fileResponse.id] : undefined,
        });
      }
      setShow(true);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSubmitProblem() {
    try {
      await updateProblemMutation.mutateAsync({
        publicationStatus: PublicationStatus.AwaitingApproval,
      });
      formik.resetForm();
      setDifficulty(1);
      setSelectedTags([]);
      setTestcases(Array(4).fill({ input: "", output: "" }));
      setHiddenTestcases(Array(6).fill({ input: "", output: "" }));
      setFile(null);
    } catch (error) {
      alert("Failed to submit problem: " + (error as ErrorModelResponse).message);
    }
    setShowPopup(false);
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

  useEffect(() => {
    if (createProblemMutation.isSuccess) {
      setShow(true);
    }
  }, [createProblemMutation.isSuccess]);

  if (createProblemMutation.isLoading || createAttachmentMutation.isLoading || updateProblemMutation.isLoading)
    return <LoadingPage />;

  return (
    <>
      {show && <SuccessCard setShow={setShow} />}
      {showPopup && <Popup setShowPopUp={setShowPopup} handleSubmit={handleSubmitProblem} />}
      <Background />
      <form onSubmit={formik.handleSubmit}>
        <OfficeHeader formik={formik} handleSaveProblem={handleSaveProblem} />
        <OfficeContent formik={formik} />
      </form>
    </>
  );
}

export default BackOfficePage;
