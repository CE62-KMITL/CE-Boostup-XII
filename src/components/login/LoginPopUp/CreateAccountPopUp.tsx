import DarkBackground from "../../utils/DarkBackground";
import Input from "../../utils/Input";
import { useFormik } from "formik";
import { emailValidator } from "../../../utils/validator.util";
import * as yup from "yup";
import { getFieldProps } from "../../../utils/getFieldProps";
import { authService } from "../../../services/auth.service";
import Button from "../../utils/Button";
import { useMutation } from "react-query";

type CreateAccountPopUpProps = {
    setShowCreateAccount: React.Dispatch<React.SetStateAction<boolean>>
}

function CreateAccountPopUp({ setShowCreateAccount }: CreateAccountPopUpProps) {
    function handleCreateAccount() {
        mutate({
            email: formik.values.email, 
            siteUrl: window.location.origin
        });
    }

    const { status, mutate } = useMutation(authService.requestAccountCreation, {
        onError: (error) => {
            console.error(error);
            alert((error as any).message);
        },
    });

    const formik = useFormik<{ email: string }>({
        initialValues: {
            ...{ email: "" },
        },
        initialErrors: {
            ...{ email: "" },
        },
        validateOnChange: true,
        enableReinitialize: true,
        validationSchema: yup.object({
            email: emailValidator,
        }),
        onSubmit: handleCreateAccount,
    });

    const emailInputProps = getFieldProps(formik, "email");

    return (
        <div className="flex justify-center items-center fixed top-0 w-screen h-screen z-50">
            <DarkBackground />
            <form className="flex flex-col items-center place-content-between absolute
            w-[50%] min-w-[450px] max-w-[500px] h-[50%] min-h-[300px] max-h-[325px] rounded-[30px] p-[36px] bg-stone01" onSubmit={formik.handleSubmit}>
                <div className="w-full text-[40px] font-[700] text-center leading-[4rem]">
                    สร้างแอคเคาท์ใหม่
                </div>
                <div className="relative w-full h-[40%] max-h-[50px]">
                    <div className="input-container w-full absolute bottom-0">
                        <Input {...emailInputProps} showErrorLabel={true} onChange={(e) => formik.setFieldValue("email", e.target.value)} label="อีเมล" type="email" placeholder=" " required={true} inputClass="w-full h-[48px] px-[16px] py-[8px] border-stone03 border-[1px] rounded-[10px] text-[18px]" labelClass="absolute left-[16px] bottom-[6px] text-[24px] font-[700]" />
                    </div>
                </div>
                <div className="flex flex-col place-content-between w-[35%] h-[20%] min-h-[80px] max-h-[90px]">
                    <button className="flex justify-center items-center w-full h-[50%] min-h-[45px] max-h-[50px] rounded-lg 
                    shadow-md bg-accent text-stone01 text-[18px] font-[700]" type="submit">
                        ดำเนินการต่อ
                    </button>
                    <div className="flex justify-center items-end w-full h-[45%]">
                        <Button ClickFunc={() => setShowCreateAccount(false)} className="text-stone04" text="กลับเข้าสู่ระบบ" />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CreateAccountPopUp;