import SubmitIcon from "../../assets/submit.svg";
import BackIcon from "../../assets/back.svg";
import Button from "../utils/Button";
import Dropdown from "../utils/Dropdown";

function OptionBar({ items }) {
  return (
    <div className="flex row justify-between w-full">
      <Button
        type={1}
        mode={1}
        validate={true}
        text="กลับบ้าน"
        img={BackIcon}
        ClickFunc={() => (window.location.href = "https://www.google.com/")}
      />
      <div className="setting flex">
        <Button
          type={1}
          mode={3}
          validate={true}
          text="กลับ"
          img=""
          ClickFunc={() => (window.location.href = "https://www.google.com/")}
        />
        {}
        <Dropdown type="1" data={items} />
        {/* <Dropdown type={1}></Dropdown> */}
        <Button
          type={1}
          mode={2}
          validate={true}
          text="ส่ง"
          img={SubmitIcon}
          ClickFunc={() => (window.location.href = "https://www.google.com/")}
        />
      </div>
    </div>
  );
}

export default OptionBar;
