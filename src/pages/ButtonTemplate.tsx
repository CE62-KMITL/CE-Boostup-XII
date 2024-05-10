import Button from "../components/utils/Button";
import BackIcon from "../assets/back.svg";
import SubmitIcon from "../assets/submit.svg";

function ButtonTemplate() {
  return (
    <div>
        <Button type={1} mode={0} text="ตรวจสอบ" img="" link ="#"/>
        <Button type={1} mode={1} text="กลับ" img={BackIcon} link ="#" />
        <Button type={1} mode={2} text="ส่ง" img={SubmitIcon} link ="#"/>
        <Button type={2} mode={0} text="ตกลง" img="" link ="https://google.com/"/>
        <Button type={2} mode={1} text="กลับ" img={BackIcon} link ="#"/>
        <Button type={2} mode={2} text="ส่ง" img={SubmitIcon}  link ="#" />
        <Button type={3} mode={0} text="ตรวจสอบ" img="" link ="#" />
        <Button type={3} mode={1} text="กลับ" img={BackIcon}  link ="#" />
        <Button type={3} mode={2} text="ส่ง" img={SubmitIcon}  link ="#" />
    </div>
  );
}

export default ButtonTemplate;