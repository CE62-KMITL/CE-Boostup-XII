import DarkBackground from "../../utils/DarkBackground";
import Input from "../../utils/Input";
import { useProfileComponentsStore } from "../../../store/zustand/profile-components.zustand";
import Button from "../../utils/Button";
import { EditProfileValidationSchema, emptyEditProfileValues, EditProfileValues } from "../../../formik/edit-profile.formik";
import { useFormik } from "formik";
import { getFieldProps } from "../../../utils/getFieldProps";
import { useUser } from "../../../hooks/user.hook";

export default function EditProfile() {
    const { setComponents } = useProfileComponentsStore();
    const { user, updateUserMutation } = useUser();

    async function handleEditProfile() {
        try {
            await updateUserMutation.mutateAsync({
                displayName: formik.values.username,
            }, {
                onSuccess: () => setComponents(2)
            });
        } catch (error) {
            console.error(error);
        }
    }

    const formik = useFormik<EditProfileValues>({
        initialValues: {
            ...emptyEditProfileValues,
        },
        initialErrors: {
            ...emptyEditProfileValues,
        },
        validateOnChange: true,
        enableReinitialize: true,
        validationSchema: EditProfileValidationSchema,
        onSubmit: handleEditProfile,
    });

    const usernameInputProps = getFieldProps(formik, "username");

    return (
        <div className="flex justify-center items-center fixed top-0 w-screen h-screen z-50">
            <DarkBackground />
            <form onSubmit={formik.handleSubmit} className="flex flex-col items-center place-content-between z-20
            xl:w-[480px] 2xl:w-[500px] xl:h-[575px] 2xl:h-[550px] xl:p-[36px_33px] 2xl:p-[30px_24px] rounded-[30px] bg-stone01">
                <h2 className="text-[40px] font-bold text-center">แก้ไขโปรไฟล์</h2>
                <div className="w-full h-fit">
                    <div className="relative w-full h-[50%] xl:min-h-[80px] xl:max-h-[90px] 2xl:min-h-[90px] 2xl:max-h-[100px]">
                        <div className={`w-full absolute bottom-0`}>
                            <Input
                                {...usernameInputProps}
                                fixPosition={true}
                                inputClass={`identify-username w-full h-[48px] px-[16px] py-[8px] border-[1px] rounded-[8px] bg-stone01 text-stone04 text-[18px]`}
                                label="ชื่อผู้ใช้" type="text" placeholder=" "
                                labelClass={`absolute left-[16px] bottom-[6px] text-[24px] font-[700] pointer-events-none`}
                                onChange={(e) => formik.setFieldValue("username", e.target.value)} />
                        </div>
                    </div>
                    <ol className="list list-disc list-outside ml-[30px] xl:pt-[12px] 2xl:pt-[16px] leading-[1.1rem]">
                        <li className={`font-medium ${usernameInputProps.error
                            ? "text-red-500" : ""}`
                        }>
                            ควรไม่เกิน 32 ตัวอักษร
                        </li>
                    </ol>
                    <div className="relative w-full h-[50%] xl:min-h-[80px] xl:max-h-[90px] 2xl:min-h-[90px] 2xl:max-h-[100px]">
                        <div className="input-container w-full absolute bottom-0">
                            <Input
                                isEditabled={false}
                                fixPosition={true}
                                inputClass="w-full h-[48px] px-[16px] py-[8px] border-[1px] rounded-[8px] bg-stone02 text-stone04 text-[18px] border-stone04"
                                label="อีเมล" type="text" placeholder={user?.email}
                                labelClass="absolute left-[16px] bottom-[6px] text-[24px] font-[700] pointer-events-none"
                                onChange={() => null}
                            />
                        </div>
                    </div>
                    <div className="flex items-center place-content-between w-full h-fit my-[1rem]">
                        <div>
                            <h4 className="text-[18px] font-bold">รหัสผ่าน</h4>
                            <p className="text-[24px] font-bold tracking-[0.1rem]">&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;</p>
                        </div>
                        <Button ClickFunc={() => { setComponents(0) }} className="w-[136px] h-[48px] border-accent border-[1px] shadow-[0_0_5px] shadow-accent rounded-[10px] text-accent text-[18px] font-bold" text="เปลี่ยนรหัส" />
                    </div>
                </div>
                <Button type="submit" className={`p-[8px_68px] rounded-[10px] ${formik.isValid ? "bg-accent" : "bg-[#D7C398] pointer-events-none"} text-stone01 text-[18px] font-bold`} text="บันทึก" />
                <Button type="button" ClickFunc={() => setComponents(null)} className="font-medium leading-[0.5rem]" text="กลับเข้าสู่หน้าโปรไฟล์" />
            </form>
        </div>
    )
};