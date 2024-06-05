import Background from "../utils/Background";
import Button from "../utils/Button";
import BackIcon from "../../assets/back.svg";
import TrashIcon from "../../assets/trash.svg";

function OfficeHeader() {
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
            ClickFunc={() => (window.location.href = "https://www.google.com/")}
          />
          <div className="flex w-52 justify-between">
            <Button
              type={1}
              mode={2}
              validate={true}
              text="ทิ้งขยะ"
              img={TrashIcon}
              ClickFunc={() =>
                (window.location.href = "https://www.google.com/")
              }
            />
            <Button
              type={1}
              mode={3}
              validate={true}
              text="บันทึก"
              img=""
              ClickFunc={() =>
                (window.location.href = "https://www.google.com/")
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OfficeHeader;
