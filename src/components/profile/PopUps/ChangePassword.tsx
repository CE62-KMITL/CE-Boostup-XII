import DarkBackground from "../../utils/DarkBackground";
import Input from "../../utils/Input";
import Button from "../../utils/Button";
import { useProfileComponentsStore } from "../../../store/zustand/profile-components.zustand";
import { useFormik } from "formik";
import { ChangePasswordValues, emptyChangePasswordValues, ChangePasswordValidationSchema } from "../../../formik/change-password.formik";
import { getFieldProps } from "../../../utils/getFieldProps";
import { useUser } from "../../../hooks/user.hook";

export default function ChangePassword() {
    const { updateUserMutation } = useUser();
    const { setComponents } = useProfileComponentsStore();

    async function handleChangePassword() {
        try {
            await updateUserMutation.mutateAsync({
                password: formik.values.password,
                oldPassword: formik.values.oldPassword,
            }, {
                onSuccess: () => setComponents(2)
            });
        } catch (error) {
            console.error(error);
        }
    }

    const formik = useFormik<ChangePasswordValues>({
        initialValues: {
            ...emptyChangePasswordValues,
        },
        initialErrors: {
            ...emptyChangePasswordValues,
        },
        validateOnChange: true,
        enableReinitialize: true,
        validationSchema: ChangePasswordValidationSchema,
        onSubmit: handleChangePassword,
    });

    const oldPasswordInputProps = getFieldProps(formik, "oldPassword");
    const passwordInputProps = getFieldProps(formik, "password");
    const confirmPasswordInputProps = getFieldProps(formik, "confirmPassword");

    return (
        <>
            <DarkBackground />
            <div className="flex justify-center items-center fixed top-0 w-screen h-screen z-50">
                <form onSubmit={formik.handleSubmit} className="flex flex-col items-center place-content-between gap-6 z-20
            xl:w-[480px] 2xl:w-[500px] h-fit p-[36px_33px] rounded-[30px] bg-stone01">
                    <h2 className="text-[40px] font-bold text-center">เปลี่ยนรหัสผ่าน</h2>
                    <div className="w-full h-fit">
                        <div className={`relative w-full xl:h-[96px] 2xl:h-[96px]`}>
                            <div className="input-container w-full absolute bottom-0">
                                <Input fixPosition={true} {...oldPasswordInputProps} inputClass="w-full h-[48px] px-[16px] py-[8px] border-[1px] rounded-[8px] bg-stone01 text-stone04 text-[18px] border-stone04"
                                    label="รหัสผ่านเดิม" placeholder=" " type="password"
                                    showErrorLabel={true}
                                    labelClass="absolute left-[16px] bottom-[6px] text-[24px] font-[700] pointer-events-none"
                                    onChange={(e) => formik.setFieldValue("oldPassword", e.target.value)} />
                            </div>
                        </div>
                        <div className={`relative w-full trnasition-all duration-500 ease-in-out xl:h-[96px] 2xl:h-[96px]"}`}>
                            <div className={`w-full absolute bottom-0`}>
                                <Input fixPosition={true} inputClass={`w-full h-[48px] px-[16px] py-[8px] border-[1px] rounded-[8px] bg-stone01 text-stone04 text-[18px] border-stone04`}
                                    showErrorLabel={true}
                                    label="รหัสผ่านใหม่" placeholder=" " type="password"
                                    labelClass={`absolute left-[16px] bottom-[6px] text-[24px] font-[700] pointer-events-none`}
                                    onChange={(e) => formik.setFieldValue("password", e.target.value)} />
                            </div>
                        </div>
                        <ol className="list list-disc list-outside ml-[24px] xl:pt-[12px] 2xl:pt-[16px] leading-[1.2rem]">
                            <li className={`font-medium ${passwordInputProps.errorMessage === "มีทั้งหมด 8 ตัวอักษรขึ้นไป" ? "text-red-500" : ""}`}>
                                มีทั้งหมด 8 ตัวอักษรขึ้นไป
                            </li>
                            <li className={`font-medium ${passwordInputProps.errorMessage === "ประกอบด้วยตัวพิมพ์ใหญ่, ตัวพิมพ์เล็ก, ตัวเลข และอักษรพิเศษ" ? "text-red-500" : ""}`}>
                                ประกอบด้วยตัวพิมพ์ใหญ่, ตัวพิมพ์เล็ก, ตัวเลข และอักษรพิเศษ
                            </li>
                        </ol>
                        <div className={`relative w-full trnasition-all duration-500 ease-in-out xl:h-[96px] 2xl:h-[96px]}`}>
                            <div className={`w-full absolute bottom-0`}>
                                <Input fixPosition={true} inputClass={`w-full h-[48px] px-[16px] py-[8px] border-[1px] rounded-[8px] bg-stone01 text-stone04 text-[18px] border-stone04`}
                                    label="ยืนยันรหัสผ่านใหม่" placeholder=" " type="password"
                                    showErrorLabel={true}
                                    labelClass={`absolute left-[16px] bottom-[6px] text-[24px] font-[700] pointer-events-none`}
                                    onChange={(e) => { formik.setFieldValue("confirmPassword", e.target.value); }} />
                            </div>
                        </div>
                        <ol className="list list-disc list-outside ml-[24px] xl:pt-[12px] 2xl:pt-[16px] leading-[1.2rem]">
                            <li className={`font-medium ${confirmPasswordInputProps.error ? "text-red-500" : ""}`}>
                                ยืนยันรหัสผ่านไม่ถูกต้อง
                            </li>
                        </ol>
                    </div>
                    <div className="flex flex-col items-center place-content-between w-full h-[75px]">
                        <Button className={`w-[180px] h-[48px] rounded-[10px] text-[18px] font-bold shadow-md
                    ${formik.isValid
                                ? "bg-accent text-stone01 hover:bg-accent02 transition-all ease-in-out duration-200 cursor-pointer"
                                : "bg-[#D7C398] text-stone01 hover:cursor-default pointer-events-none"
                            }`} text="ตกลง" type="submit"
                        />
                        <Button type="button" ClickFunc={() => setComponents(null)} className="font-medium leading-[0.5rem]" text="กลับเข้าสู่หน้าโปรไฟล์" />
                    </div>
                </form>
            </div>
        </>
    )
};