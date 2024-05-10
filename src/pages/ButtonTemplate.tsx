import Button from "../components/utils/Button";
import BackIcon from "../assets/back.svg";
import SubmitIcon from "../assets/submit.svg";
import Dropdown from "../components/utils/Dropdown";
import Background from "../components/utils/Background";
const items = [
    [1,1],
    [2,2]
]
function ButtonTemplate() {
  return (
    <div className="w-screen h-screen p-10 space-y-2">
        <Dropdown data={[['pass', 'ผ่าน'], ['b', 'ไม่ผ่าน'], ['c', 'ไม่ผ่านค่ะ']]} />
        <Dropdown data={[['pass', 'ผ่าน'], ['b', 'ไม่ผ่าน'], ['c', 'ไม่ผ่านค่ะ']]} />
        <Dropdown data={[['pass', 'ผ่าน'], ['b', 'ไม่ผ่าน'], ['c', 'ไม่ผ่านค่ะ']]} />
        <Dropdown data={[['pass', 'ผ่าน'], ['b', 'ไม่ผ่าน'], ['c', 'ไม่ผ่านค่ะ']]} />
        <Dropdown data={[['pass', 'ผ่าน'], ['b', 'ไม่ผ่าน'], ['c', 'ไม่ผ่านค่ะ']]} />
        <Dropdown data={[['pass', 'ผ่าน'], ['b', 'ไม่ผ่าน'], ['c', 'ไม่ผ่านค่ะ']]} />
        <Dropdown data={[['pass', 'ผ่าน'], ['b', 'ไม่ผ่าน'], ['c', 'ไม่ผ่านค่ะ']]} />

    </div>
  );
}

export default ButtonTemplate;