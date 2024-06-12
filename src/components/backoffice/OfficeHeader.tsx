import Background from "../utils/Background";
import Button from "../utils/OldButton";
import BackIcon from "../../assets/back.svg";
import TrashIcon from "../../assets/trash.svg";
import { useNavigate } from "react-router-dom";
import { FormikProps } from "formik";
import { CreateProblemValues } from "../../formik/create-problem.formilk";
import { useProblem } from "../../hooks/problem.hook";
import { ErrorModelResponse } from "../../types/response.type";

type OfficeHeaderProps = {
  formik: FormikProps<CreateProblemValues>;
  handleSaveProblem: () => void;
};

function OfficeHeader({ formik, handleSaveProblem }: OfficeHeaderProps) {
  const navigate = useNavigate();
  const { deleteProblemMutation } = useProblem();

  async function handleDeleteProblem() {
    try {
      await deleteProblemMutation.mutateAsync();
      navigate("/home");
    } catch (error) {
      console.error(error);
      alert((error as ErrorModelResponse).message);
    }
  }

  return (
    <>
      <Background />
      <div className="py-14">
        <header className="pointer-events-none absolute  w-full justify-center flex text-[32px] text-stone01">
          สร้างโจทย์ของคุณ
        </header>
        <div className="px-20 h-10 flex justify-between">
          <Button
            type={1}
            mode={1}
            validate={true}
            text="กลับ"
            img={BackIcon}
            ClickFunc={() => navigate("/home")}
          />
          <div className="flex w-52 justify-between">
            <Button
              type={1}
              mode={2}
              validate={true}
              text="ทิ้งขยะ"
              img={TrashIcon}
              ClickFunc={handleDeleteProblem}
            />
            <Button
              type={1}
              mode={3}
              validate={true}
              buttonType="button"
              text="บันทึก"
              ClickFunc={formik.isValid ? handleSaveProblem : undefined}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OfficeHeader;
