import Button from "../utils/Button";
import Input from "../utils/Input";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { RegisterValues, emptyRegisterValues, RegisterValidationSchema } from "../../formik/register.formik";
import { getFieldProps } from "../../utils/getFieldProps";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import { UseMutationResult } from "react-query";
import { RegisterDto } from "../../dto/auth.dto";
import { useEffect } from "react";

type RegisterFormCardProps = {
  mutation: UseMutationResult<{ massage: string; }, unknown, RegisterDto, unknown>
};

function RegisterFormCard({ mutation }: RegisterFormCardProps) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('token');
    if (!token)
      navigate("/");
  }, [searchParams]);

  async function handleRegister() {
    try {
      const token = searchParams.get('token');
      if (!token)
        return navigate("/");
      await mutation.mutateAsync({
        password: formik.values.password,
        token
      });
      navigate("/");
    } catch (error) {
      console.error(error);
      alert((error as any).message);
    }
  }

  const formik = useFormik<RegisterValues>({
    initialValues: {
      ...emptyRegisterValues,
    },
    initialErrors: {
      ...emptyRegisterValues,
    },
    validateOnChange: true,
    enableReinitialize: true,
    validationSchema: RegisterValidationSchema,
    onSubmit: handleRegister,
  });

  const usernameInputProps = getFieldProps(formik, "username");
  const passwordInputProps = getFieldProps(formik, "password");
  const confirmPasswordInputProps = getFieldProps(formik, "confirmPassword");

  return (
    <div
      className="w-full h-full rounded-[30px] p-[20px] xl:p-[30px] 2xl:p-[36px] bg-stone01">
      <form onSubmit={formik.handleSubmit}
        className="border-none border-blue-500 flex flex-col items-center place-content-between w-full h-full">
        <div className="text-stone05 text-[40px] text-center font-[700] leading-[6rem] 2xl:leading-[8rem]">
          ลงทะเบียน
        </div>
        <div className="flex flex-col w-[372px] 2xl:w-[480px] h-[400px] 2xl:h-[500px]">
          <div className="relative w-full h-[40%] max-h-[80px] 2xl:max-h-[90px]">
            <div className={`input-container w-full absolute bottom-0`}>
              <Input {...usernameInputProps} inputClass={`identify-username w-full h-[48px] px-[16px] py-[8px] border-[1px] rounded-[8px] bg-stone01 text-stone04 text-[18px]
                }`} label="ชื่อผู้ใช้" type="text" placeholder=" " labelClass={`absolute left-[16px] bottom-[6px] text-[24px] font-[700]
                  }`} onChange={(e) => { formik.setFieldValue("username", e.target.value) }} />
            </div>
          </div>
          <ol className="list list-disc list-inside p-[12px_8px] 2xl:p-[16px_8px] leading-[1.2rem]">
            <li className={usernameInputProps.error ? "text-red-600" : ""}>
              ควรไม่เกิน 32 ตัวอักษร
            </li>
          </ol>
          <div className="relative w-full h-[40%] max-h-[80px] 2xl:max-h-[90px]">
            <div className={`input-container w-full absolute bottom-0`} >
              <Input {...passwordInputProps} inputClass={`identify-init-password w-full h-[48px] px-[16px] py-[8px] border-[1px] rounded-[8px] bg-stone01 text-stone04 text-[18px]
                }`} label="รหัสผ่าน" type="password" placeholder=" " labelClass={`absolute left-[16px] bottom-[6px] text-[24px] font-[700]
                  }`} onChange={(e) => { formik.setFieldValue("password", e.target.value) }} />
            </div>
          </div>
          <ol className="list list-disc list-inside p-[12px_8px] 2xl:p-[16px_8px] leading-[1.2rem]">
            <li className={passwordInputProps.error && passwordInputProps.errorMessage == "มีทั้งหมด 8 ตัวอักษรขึ้นไป" ? "text-red-600" : ""}>
              มีทั้งหมด 8 ตัวอักษรขึ้นไป
            </li>
            <li className={passwordInputProps.error && passwordInputProps.errorMessage == "ประกอบด้วยตัวพิมพ์ใหญ่, ตัวพิมพ์เล็ก, ตัวเลข และอักษรพิเศษ" ? "text-red-600" : ""}>
              ประกอบด้วยตัวพิมพ์ใหญ่, ตัวพิมพ์เล็ก, ตัวเลข และอักษรพิเศษ
            </li>
          </ol>

          <div className="relative w-full h-[50%] min-h-[80px] max-h-[90px] 2xl:min-h-[90px] 2xl:max-h-[100px]">
            <div
              className={`input-container
                } w-full absolute bottom-0`}
            >
              <Input {...confirmPasswordInputProps} inputClass={`identify-confirm-password w-full h-[48px] px-[16px] py-[8px] border-[1px] rounded-[8px] bg-stone01 text-stone04 text-[18px]
                }`} label="ยืนยันรหัสผ่าน" type="password" placeholder=" " labelClass={`absolute left-[16px] bottom-[6px] text-[24px] font-[700]
                  }`} onChange={(e) => { formik.setFieldValue("confirmPassword", e.target.value) }} />
            </div>
          </div>

          <ol className="list list-disc list-outside ml-[30px] pt-[12px] 2xl:pt-[16px] leading-[1.1rem]">
            <li
              className={confirmPasswordInputProps.error ? "text-red-600" : ""}
            >
              ยืนยันรหัสผ่านไม่ถูกต้อง
            </li>
          </ol>

        </div>
        <Button
          className={`${formik.isValid ? "bg-accent" : "bg-[#D7C398] pointer-events-none"} text-stone01 transition ease-in-out duration-200 shadow-md cursor-pointer w-36 h-10 rounded-lg flex items-center justify-center`}
          text="ตกลง"
          type="submit"
        />
        <Link to="/" className="text-stone04 leading-[1.2rem]">มีแอคเคาท์แล้ว?</Link>
      </form>
    </div>
  );
}

export default RegisterFormCard;
