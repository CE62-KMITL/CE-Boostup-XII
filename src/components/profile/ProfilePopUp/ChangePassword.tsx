import { useState } from "react";
import DarkBackground from "../../utils/DarkBackground";
import Input from "../../utils/Input";

export default function ChangePassword() {
    const [oldPasswordInput, setOldPasswordInput] = useState<string>("");
    const [newPasswordInput, setNewPasswordInput] = useState<string>("");
    const [confirmPasswordInput, setConfirmPasswordInput] = useState<string>("");

    const [oldPasswordHeight, setOldPasswordHeight] = useState(false);
    const [newPasswordHeight, setNewPasswordHeight] = useState(false);
    const [confirmPasswordHeight, setConfirmPasswordHeight] = useState(false);

    const [oldPasswordAppearance, setOldPasswordAppearance] = useState(false);
    const [newPasswordAppearance, setNewPasswordAppearance] = useState(false);
    const [confirmPasswordAppearance, setConfirmPasswordAppearance] = useState(false);

    const [newPasswordAlert01, setNewPasswordAlert01] = useState(false);
    const [newPasswordAlert02, setNewPasswordAlert02] = useState(false);
    const [confirmPasswordAlert01, setConfirmPasswordAlert01] = useState(false);
    const [checkedSumbitButton, setCheckedSubmitButton] = useState(false);

    const handleOldPasswordHeight = () => {
        setOldPasswordHeight(oldPasswordInput.length > 0 ? true : false)
    }

    const handleNewPasswordHeight = () => {
        setNewPasswordHeight(newPasswordInput.length > 0 ? true : false)
    }

    const handleConfirmPasswordHeight = () => {
        setConfirmPasswordHeight(confirmPasswordInput.length > 0 ? true : false)
    }

    const handleNewPasswordAlert01 = () => {
        const newPassword = newPasswordInput;
        setNewPasswordAlert01(newPassword.length < 8 ? true : false);
    }

    const handleNewPasswordAlert02 = () => {
        const newPassword = newPasswordInput;

        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const numberRegex = /[0-9]/;
        const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    
        const hasUppercase = uppercaseRegex.test(newPassword);
        const hasLowercase = lowercaseRegex.test(newPassword);
        const hasNumber = numberRegex.test(newPassword);
        const hasSpecialChar = specialCharRegex.test(newPassword);

        setNewPasswordAlert02(
            (!hasUppercase || !hasLowercase || !hasNumber || !hasSpecialChar) &&
            newPassword.length != 0
        );
    }

    const handleConfirmPasswordAlert01 = () => {
        const newPassword = newPasswordInput;
        const confirmPassword = confirmPasswordInput;

        setConfirmPasswordAlert01(newPassword != confirmPassword || 
            newPasswordAlert01 || newPasswordAlert02 || !(confirmPassword.length != 0));
    }

    const handleCheckedSubmitButton = () => {
        const oldPassword = oldPasswordInput;
        const newPassword = newPasswordInput;
        const confirmPassword = confirmPasswordInput;

        setCheckedSubmitButton(
            oldPassword.length != 0 && newPassword.length != 0 && confirmPassword.length != 0 &&
            !newPasswordAlert01 && !newPasswordAlert02 && !confirmPasswordAlert01);
    }

    const handleOldPasswordAppearance = () => {
        setOldPasswordAppearance(!oldPasswordAppearance);
    };
  
    const handleNewPasswordAppearance = () => {
        setNewPasswordAppearance(!newPasswordAppearance);
    };

    const handleConfirmPasswordAppearance = () => {
        setConfirmPasswordAppearance(!confirmPasswordAppearance);
    };
  
    const OpenEyeIcon = ({ status }: { status: string }) => (
      <div className="flex justify-center items-center relative w-full h-full cursor-pointer">
        <svg
          className="absolute"
          width="30"
          height="24"
          viewBox="0 0 30 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            className={`${status === 'alert' ? 'fill-[#FF0000] hover:fill-red-400' : 'fill-[#495057] hover:fill-black'}`}
            d="M0 12C0 14.46 0.6375 15.2865 1.9125 16.944C4.458 20.25 8.727 24 15 24C21.273 24 25.542 20.25 28.0875 16.944C29.3625 15.288 30 14.4585 30 12C30 9.54 29.3625 8.7135 28.0875 7.056C25.542 3.75 21.273 0 15 0C8.727 0 4.458 3.75 1.9125 7.056C0.6375 8.715 0 9.5415 0 12ZM15 6.375C13.5082 6.375 12.0774 6.96763 11.0225 8.02252C9.96763 9.07742 9.375 10.5082 9.375 12C9.375 13.4918 9.96763 14.9226 11.0225 15.9775C12.0774 17.0324 13.5082 17.625 15 17.625C16.4918 17.625 17.9226 17.0324 18.9775 15.9775C20.0324 14.9226 20.625 13.4918 20.625 12C20.625 10.5082 20.0324 9.07742 18.9775 8.02252C17.9226 6.96763 16.4918 6.375 15 6.375Z"
          />
        </svg>
        <svg
          className="absolute"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path className={`${status === 'alert' ? 'fill-[#FF0000] hover:fill-red-400' : 'fill-[#495057] hover:fill-black'}`}
            d="M0.625 4C0.625 3.10489 0.98058 2.24645 1.61351 1.61351C2.24645 0.98058 3.10489 0.625 4 0.625C4.89511 0.625 5.75355 0.98058 6.38649 1.61351C7.01942 2.24645 7.375 3.10489 7.375 4C7.375 4.89511 7.01942 5.75355 6.38649 6.38649C5.75355 7.01942 4.89511 7.375 4 7.375C3.10489 7.375 2.24645 7.01942 1.61351 6.38649C0.98058 5.75355 0.625 4.89511 0.625 4Z"
          />
        </svg>
      </div>
    );
  
    const ClosedEyeIcon = ({ status }: { status: string }) => (
      <div className="flex justify-center items-center relative w-full h-full cursor-pointer ">
        <svg
          className="absolute"
          width="34"
          height="18"
          viewBox="0 0 34 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={`${status === 'alert' ? 'fill-[#FF0000] hover:fill-red-300' : 'fill-[#495057] hover:fill-black'}`}
            d="M3.04613 1.06382C2.92818 0.786837 2.70546 0.56824 2.42696 0.456118C2.14846 0.343997 1.83701 0.347536 1.56111 0.465957C1.28522 0.584378 1.06748 0.80798 0.955798 1.08757C0.844117 1.36717 0.847642 1.67985 0.965598 1.95683L3.04613 1.06382ZM12.6211 11.7088C12.7055 11.5839 12.7643 11.4434 12.7939 11.2955C12.8236 11.1475 12.8235 10.9951 12.7938 10.8472C12.7641 10.6993 12.7054 10.5588 12.6209 10.4339C12.5365 10.3091 12.4281 10.2024 12.3021 10.1201C12.1762 10.0378 12.0351 9.98149 11.8872 9.95457C11.7393 9.92764 11.5875 9.93058 11.4408 9.96323C11.294 9.99588 11.1552 10.0576 11.0325 10.1447C10.9098 10.2319 10.8056 10.3427 10.726 10.4707L12.6211 11.7088ZM8.59574 13.7567C8.51476 13.8817 8.45911 14.0215 8.43195 14.1681C8.4048 14.3148 8.40667 14.4653 8.43747 14.6112C8.49968 14.9058 8.67592 15.1636 8.92742 15.3278C9.17893 15.492 9.4851 15.5491 9.77858 15.4867C9.92389 15.4558 10.0617 15.3964 10.1842 15.312C10.3067 15.2276 10.4114 15.1198 10.4923 14.9948L8.59574 13.7567ZM33.1988 1.95683C33.3041 1.68263 33.2994 1.37811 33.1856 1.10734C33.0719 0.836573 32.8579 0.620646 32.5888 0.504978C32.3197 0.38931 32.0165 0.382916 31.7428 0.48714C31.4691 0.591364 31.2463 0.798084 31.1213 1.06382L33.1988 1.95683ZM29.0981 10.834C29.2016 10.9455 29.3264 11.035 29.4651 11.097C29.6038 11.159 29.7536 11.1924 29.9054 11.1951C30.0572 11.1978 30.208 11.1698 30.3488 11.1127C30.4896 11.0556 30.6175 10.9706 30.7249 10.8628C30.8322 10.755 30.9169 10.6266 30.9738 10.4852C31.0306 10.3439 31.0586 10.1925 31.0559 10.0401C31.0532 9.88764 31.02 9.73733 30.9582 9.59808C30.8964 9.45883 30.8073 9.33351 30.6962 9.22958L29.0981 10.834ZM15.9515 15.8893C15.9515 16.1904 16.0706 16.4791 16.2827 16.692C16.4947 16.9049 16.7823 17.0245 17.0822 17.0245C17.3821 17.0245 17.6697 16.9049 17.8818 16.692C18.0938 16.4791 18.2129 16.1904 18.2129 15.8893H15.9515ZM23.6721 14.9948C23.8356 15.2473 24.0924 15.4242 24.3859 15.4867C24.6793 15.5491 24.9855 15.492 25.237 15.3278C25.4885 15.1636 25.6648 14.9058 25.727 14.6112C25.7892 14.3166 25.7322 14.0092 25.5687 13.7567L23.6721 14.9948ZM7.32933 8.56209C7.52886 8.34671 7.63733 8.06198 7.63189 7.7679C7.62645 7.47381 7.50751 7.19332 7.30015 6.98553C7.09278 6.77774 6.81317 6.65887 6.52023 6.65396C6.22729 6.64905 5.94388 6.75849 5.72973 6.95921L7.32933 8.56209ZM3.46827 9.22807C3.26854 9.44326 3.15981 9.72788 3.16497 10.022C3.17014 10.3161 3.28881 10.5967 3.49598 10.8046C3.70315 11.0126 3.98264 11.1318 4.27558 11.137C4.56851 11.1421 4.85202 11.033 5.06637 10.8325L3.46827 9.22807ZM17.0822 10.9702C12.2216 10.9702 8.73143 8.5409 6.4157 6.03593C5.44285 4.97858 4.58284 3.82197 3.8497 2.58497C3.57324 2.11967 3.31819 1.64188 3.08533 1.15312C3.07411 1.12848 3.06305 1.10375 3.05217 1.07896L3.04613 1.06382L3.04463 1.06231L2.00587 1.51033C1.65838 1.65795 1.31162 1.80577 0.965598 1.95683L0.967106 1.95835L0.968613 1.96289L0.973136 1.97197C0.99268 2.01662 1.01278 2.06102 1.03344 2.10516C1.29938 2.66541 1.59117 3.21291 1.90787 3.74588C2.526 4.79025 3.46676 6.18275 4.7573 7.57978C7.3429 10.3723 11.3894 13.2406 17.0822 13.2406V10.9702ZM22.077 10.0333C20.6146 10.613 18.9547 10.9702 17.0822 10.9702V13.2406C19.2502 13.2406 21.1905 12.8228 22.9047 12.1462L22.077 10.0333ZM10.726 10.4707L8.59574 13.7567L10.4923 14.9933L12.6211 11.7088L10.726 10.4707ZM32.1586 1.51033L31.1183 1.06231H31.1198V1.06533L31.1093 1.08501C31.0368 1.24456 30.9609 1.40251 30.8816 1.55876C29.8512 3.56329 28.4925 5.37967 26.8622 6.93197L28.4091 8.58782C30.3504 6.7392 31.9447 4.55516 33.1159 2.13998L33.1747 2.01132L33.1898 1.975L33.1958 1.9644V1.95986L33.1973 1.95835L32.1586 1.51033ZM26.8622 6.93197C25.5657 8.15191 23.9781 9.28104 22.077 10.0333L22.9047 12.1462C25.1255 11.2684 26.9527 9.96064 28.4091 8.58782L26.8622 6.93197ZM26.8366 8.56209L29.0981 10.834L30.6962 9.22807L28.4347 6.9577L26.8366 8.56209ZM15.9515 12.1054V15.8893H18.2129V12.1054H15.9515ZM21.5433 11.7088L23.6721 14.9948L25.5687 13.7567L23.4384 10.4707L21.5433 11.7088ZM5.72822 6.95618L3.46677 9.22655L5.06637 10.8325L7.32782 8.5636L5.72822 6.95618Z"
          />
        </svg>
      </div>
    );

    const oldEyeIcon = (state: string) => {
        return oldPasswordAppearance ? <OpenEyeIcon status={state} /> : <ClosedEyeIcon status={state} />;
    };
  
    const newEyeIcon = (state: string) => {
        return newPasswordAppearance ? <OpenEyeIcon status={state} /> : <ClosedEyeIcon status={state} />;
    };
  
    const confirmEyeIcon = (state: string) => {
        return confirmPasswordAppearance ? <OpenEyeIcon status={state} /> : <ClosedEyeIcon status={state} />;
    };

    const IntegralSystem = () => {
        handleOldPasswordHeight();
        handleNewPasswordHeight();
        handleConfirmPasswordHeight();
        handleNewPasswordAlert01();
        handleNewPasswordAlert02();
        handleConfirmPasswordAlert01();
        handleCheckedSubmitButton();
    }

    return (
        <div className="flex justify-center items-center fixed top-0 w-screen h-screen z-50">
            <DarkBackground/>
            <div onKeyUp={IntegralSystem} className="flex flex-col items-center place-content-between gap-6 z-20
            xl:w-[480px] 2xl:w-[500px] h-fit p-[36px_33px] rounded-[30px] bg-stone01">
                
                <h2 className="text-[40px] font-bold text-center">แก้ไขโปรไฟล์</h2>
                
                <div className="w-full h-fit">
                    
                    <div className={`relative w-full trnasition-all duration-500 ease-in-out
                    ${oldPasswordHeight ? "xl:h-[96px] 2xl:h-[96px]" : "xl:h-[64px] 2xl:h-[64px]"}`}>
                        <div className="input-container w-full absolute bottom-0">
                        <Input inputClass="w-full h-[48px] px-[16px] py-[8px] border-[1px] rounded-[8px] bg-stone01 text-stone04 text-[18px] border-stone04"
                            label="รหัสผ่านเดิม" placeholder=" "  type={oldPasswordAppearance 
                                ? "text" : "password"
                            }
                            labelClass="absolute left-[16px] bottom-[6px] text-[24px] font-[700] pointer-events-none"
                            func={(e) => {setOldPasswordInput(e.target.value);}} />
                        </div>
                        <div className="absolute bottom-0 right-0 w-[60px] h-[48px] border-[1px] border-transparent rounded-r-[10px]">
                            <div onClick={handleOldPasswordAppearance}
                            className="flex justify-center items-center w-full h-full"
                            >
                            {oldEyeIcon("none-detect")}
                            </div>
                        </div>
                    </div>

                    <div className={`relative w-full trnasition-all duration-500 ease-in-out
                    ${newPasswordHeight ? "xl:h-[96px] 2xl:h-[96px]" : "xl:h-[64px] 2xl:h-[64px]"}`}>
                        <div className={`${newPasswordAlert01 || newPasswordAlert02 ? "error-input-container" : "input-container"} w-full absolute bottom-0`}>
                        <Input inputClass={`w-full h-[48px] px-[16px] py-[8px] border-[1px] rounded-[8px] bg-stone01 text-stone04 text-[18px] border-stone04
                            ${newPasswordAlert01 || newPasswordAlert02
                                ? "border-red-500" : "border-stone04"
                            }`}
                            label="รหัสผ่านใหม่" placeholder=" "  type={newPasswordAppearance 
                                ? "text" : "password"
                            }
                            labelClass={`absolute left-[16px] bottom-[6px] text-[24px] font-[700] pointer-events-none
                            ${newPasswordAlert01 || newPasswordAlert02 
                                ? "text-red-500" : ""
                            }`}
                            func={(e) => {setNewPasswordInput(e.target.value);}} />
                        </div>
                        <div className="absolute bottom-0 right-0 w-[60px] h-[48px] border-[1px] border-transparent rounded-r-[10px]">
                            <div onClick={handleNewPasswordAppearance}
                            className="flex justify-center items-center w-full h-full"
                            >
                            {newEyeIcon(newPasswordAlert01 || newPasswordAlert02 ? "alert" : "allow")}
                            </div>
                        </div>
                    </div>
                    <ol className="list list-disc list-outside ml-[24px] xl:pt-[12px] 2xl:pt-[16px] leading-[1.2rem]">
                        <li className={`font-medium ${newPasswordAlert01 ? "text-red-500" : ""}`}>
                        มีทั้งหมด 8 ตัวอักษรขึ้นไป
                        </li>
                        <li className={`font-medium ${newPasswordAlert02 ? "text-red-500" : ""}`}>
                        ประกอบด้วยตัวพิมพ์ใหญ่, ตัวพิมพ์เล็ก, ตัวเลข และอักษรพิเศษ
                        </li>
                    </ol>

                    <div className={`relative w-full trnasition-all duration-500 ease-in-out
                    ${confirmPasswordHeight ? "xl:h-[96px] 2xl:h-[96px]" : "xl:h-[64px] 2xl:h-[64px]"}`}>
                        <div className={`${confirmPasswordAlert01 ? "error-input-container" : "input-container"} w-full absolute bottom-0`}>
                        <Input inputClass={`w-full h-[48px] px-[16px] py-[8px] border-[1px] rounded-[8px] bg-stone01 text-stone04 text-[18px] border-stone04
                            ${confirmPasswordAlert01
                                ? "border-red-500" : "border-stone04"
                            }`}
                            label="ยืนยันรหัสผ่านใหม่" placeholder=" "  type={confirmPasswordAppearance 
                                ? "text" : "password"
                            }
                            labelClass={`absolute left-[16px] bottom-[6px] text-[24px] font-[700] pointer-events-none
                            ${confirmPasswordAlert01 
                                ? "text-red-500" : ""
                            }`}
                            func={(e) => {setConfirmPasswordInput(e.target.value);}} />
                        </div>
                        <div className="absolute bottom-0 right-0 w-[60px] h-[48px] border-[1px] border-transparent rounded-r-[10px]">
                            <div onClick={handleConfirmPasswordAppearance}
                            className="flex justify-center items-center w-full h-full"
                            >
                            {confirmEyeIcon(confirmPasswordAlert01 ? "alert" : "allow")}
                            </div>
                        </div>
                    </div>
                    <ol className="list list-disc list-outside ml-[24px] xl:pt-[12px] 2xl:pt-[16px] leading-[1.2rem]">
                        <li className={`font-medium ${confirmPasswordAlert01 ? "text-red-500" : "hidden"}`}>
                        ยืนยันรหัสผ่านไม่ถูกต้อง
                        </li>
                    </ol>

                </div>

                <div className="flex flex-col items-center place-content-between w-full h-[75px]">
                    <button className={`w-[180px] h-[48px] rounded-[10px] text-[18px] font-bold shadow-md
                    ${checkedSumbitButton 
                        ? "bg-accent text-stone01 hover:bg-accent02 transition-all ease-in-out duration-200 cursor-pointer" 
                        : "bg-[#D7C398] text-stone01 hover:cursor-default pointer-events-none"
                    }`}
                    >ตกลง</button>
                    <a href=""
                    className="font-medium leading-[0.5rem]">กลับเข้าสู่หน้าโปรไฟล์</a>
                </div>

            </div>
        </div>
    )
};