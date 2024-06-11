import Background from "../utils/Background";
import Button from "../utils/OldButton";
import BackIcon from "../../assets/back.svg";
import TrashIcon from "../../assets/trash.svg";
import { useNavigate } from "react-router-dom";

function OfficeHeader() {
  const navigate = useNavigate();

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
            ClickFunc={() => navigate(-1)}
          />
          <div className="flex w-52 justify-between">
            <Button
              type={1}
              mode={2}
              validate={true}
              text="ทิ้งขยะ"
              img={TrashIcon}
            />
            <Button
              type={1}
              mode={3}
              validate={true}
              text="บันทึก"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OfficeHeader;
