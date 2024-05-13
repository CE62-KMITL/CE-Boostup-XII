import { useState } from "react";
import Button from "../utils/OldButton";
import Input from "../utils/Input";
import { Link } from "react-router-dom";

function RegisterFormCard() {
  const [usernameAlert01, setUsernameAlert01] = useState(false);
  const [initPasswordAlert01, setInitPasswordAlert01] = useState(false);
  const [initPasswordAlert02, setInitPasswordAlert02] = useState(false);
  const [confirmPasswordAlert, setConfirmPasswordAlert] = useState(false);
  const [checkedSumbitButton, setCheckedSubmitButton] = useState(false);
  const [usernameInput, setUsernameInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState<string>("");

  function handleSubmit() {
    console.log("submit");
  }

  const handleUsernameFunctionGroup = () => {
    handleUsernameAlert01();
    handleCheckedSubmitButton();
  };

  const handleInitPasswordFunctionGroup = () => {
    handleInitPasswordAlert01();
    handleInitPasswordAlert02();
    handleCheckedSubmitButton();
  }

  const handleConfirmPasswordFunctionGroup = () => {
    handleConfirmPasswordAlert();
    handleCheckedSubmitButton();
  }

  const handleUsernameAlert01 = () => {
    const username = usernameInput
    if (username.length > 10 && username.length != 0) {
      setUsernameAlert01(true);
    } else {
      setUsernameAlert01(false);
    }
  };

  const handleInitPasswordAlert01 = () => {
    const password = passwordInput
    if (password.length < 8 && password.length != 0) {
      setInitPasswordAlert01(true);
    } else {
      setInitPasswordAlert01(false);
    }
  };

  const handleInitPasswordAlert02 = () => {
    const password = passwordInput

    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    const hasUppercase = uppercaseRegex.test(password);
    const hasLowercase = lowercaseRegex.test(password);
    const hasNumber = numberRegex.test(password);
    const hasSpecialChar = specialCharRegex.test(password);

    if (
      (!hasUppercase || !hasLowercase || !hasNumber || !hasSpecialChar) &&
      password.length != 0
    ) {
      setInitPasswordAlert02(true);
    } else {
      setInitPasswordAlert02(false);
    }
  };

  const handleConfirmPasswordAlert = () => {
    const password = passwordInput
    const confirmPassword = confirmPasswordInput
    if (
      confirmPassword != password ||
      initPasswordAlert01 == true ||
      initPasswordAlert02 == true
    ) {
      setConfirmPasswordAlert(true);
    } else {
      setConfirmPasswordAlert(false);
    }
  };

  const handleCheckedSubmitButton = () => {
    const username = usernameInput
    const password = passwordInput
    const confirmPassword = confirmPasswordInput

    if (
      username.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0 &&
      !usernameAlert01 &&
      !initPasswordAlert01 &&
      !initPasswordAlert02 &&
      !confirmPasswordAlert
    ) {
      setCheckedSubmitButton(true);
    } else {
      setCheckedSubmitButton(false);
    }
  };

  return (
    <div
      className="w-full h-full rounded-[30px] lg:p-[20px] xl:p-[30px] 2xl:p-[36px] bg-stone01">
      <form action=""
        className="border-none border-blue-500 flex flex-col items-center place-content-between w-full h-full">
        <div className="text-stone05 text-[40px] text-center font-[700] xl:leading-[6rem] 2xl:leading-[8rem]">
          ลงทะเบียน
        </div>
        <div className="flex flex-col xl:w-[372px] 2xl:w-[480px] xl:h-[400px] 2xl:h-[500px]">
          <div className="relative w-full h-[40%] xl:max-h-[80px] 2xl:max-h-[90px]">
            <div className={`${usernameAlert01 ? "error-input-container" : "input-container"} w-full absolute bottom-0`}>
              <Input inputClass={`identify-username w-full h-[48px] px-[16px] py-[8px] border-[1px] rounded-[8px] bg-stone01 text-stone04 text-[18px]
                  ${usernameAlert01
                  ? "border-red-500"
                  : "border-stone03"
                }`} label="ชื่อผู้ใช้" type="text" placeholder=" " labelClass={`absolute left-[16px] bottom-[6px] text-[24px] font-[700]
                  ${usernameAlert01 ? "text-red-500" : ""
                  }`} func={(e) => { setUsernameInput(e.target.value); handleUsernameFunctionGroup() }} />
            </div>
          </div>
          <ol className="list list-disc list-inside xl:p-[12px_8px] 2xl:p-[16px_8px] leading-[1.2rem]">
            <li className={`${usernameAlert01 ? "text-red-500" : ""}`}>
              ควรไม่เกิน 10 ตัวอักษร
            </li>
          </ol>
          <div className="relative w-full h-[40%] xl:max-h-[80px] 2xl:max-h-[90px]">
            <div className={`${initPasswordAlert01 || initPasswordAlert02 ? "error-input-container" : "input-container"} w-full absolute bottom-0`} >
              <Input inputClass={`identify-init-password w-full h-[48px] px-[16px] py-[8px] border-[1px] rounded-[8px] bg-stone01 text-stone04 text-[18px]
                  ${initPasswordAlert01 || initPasswordAlert02
                  ? "border-red-500"
                  : "border-stone03"
                }`} label="รหัสผ่าน" type="password" placeholder=" " labelClass={`absolute left-[16px] bottom-[6px] text-[24px] font-[700]
                  ${initPasswordAlert01 || initPasswordAlert02 ? "text-red-500" : ""
                  }`} func={(e) => { setPasswordInput(e.target.value); handleInitPasswordFunctionGroup() }} />
            </div>
          </div>
          <ol className="list list-disc list-inside xl:p-[12px_8px] 2xl:p-[16px_8px] leading-[1.2rem]">
            <li className={`${initPasswordAlert01 ? "text-red-500" : ""}`}>
              มีทั้งหมด 8 ตัวอักษรขึ้นไป
            </li>
            <li className={`${initPasswordAlert02 ? "text-red-500" : ""}`}>
              ประกอบด้วยตัวพิมพ์ใหญ่, ตัวพิมพ์เล็ก, ตัวเลข และอักษรพิเศษ
            </li>
          </ol>
          <div className="relative w-full h-[40%] xl:max-h-[80px] 2xl:max-h-[90px]">
            <div
              className={`${confirmPasswordAlert
                ? "error-input-container"
                : "input-container"
                } w-full absolute bottom-0`}
            >
              <Input inputClass={`identify-confirm-password w-full h-[48px] px-[16px] py-[8px] border-[1px] rounded-[8px] bg-stone01 text-stone04 text-[18px]
                  ${confirmPasswordAlert
                  ? "border-red-500"
                  : "border-stone03"
                }`} label="ยืนยันรหัสผ่าน" type="password" placeholder=" " labelClass={`absolute left-[16px] bottom-[6px] text-[24px] font-[700]
                  ${confirmPasswordAlert ? "text-red-500" : ""
                  }`} func={(e) => { setConfirmPasswordInput(e.target.value); handleConfirmPasswordFunctionGroup() }} />
            </div>
          </div>
          <ol className="list list-disc list-inside xl:p-[12px_8px] 2xl:p-[16px_8px] leading-[1.2rem]">
            <li
              className={`${confirmPasswordAlert ? "text-red-500" : "text-transparent"}`}
            >
              ยืนยันรหัสผ่านไม่ถูกต้อง
            </li>
          </ol>
        </div>
        <Button
          type={2}
          mode={0}
          text="ตกลง"
          ClickFunc={() => handleSubmit()}
          validate={checkedSumbitButton}
        />
        <Link to="/" className="text-stone04 leading-[1.2rem]">มีแอคเคาท์แล้ว?</Link>
      </form>
    </div>
  );
}

export default RegisterFormCard;
