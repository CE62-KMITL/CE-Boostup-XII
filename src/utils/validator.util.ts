import * as yup from "yup";

export const emailValidator = yup.
    string()
    .email("อีเมลไม่ถูกต้อง")
    .required("กรุณากรอกอีเมล");

export const passwordValidator = yup
    .string()
    .min(8, "มีทั้งหมด 8 ตัวอักษรขึ้นไป")
    .required("กรุณากรอกรหัสผ่าน")
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/,
        "ประกอบด้วยตัวพิมพ์ใหญ่, ตัวพิมพ์เล็ก, ตัวเลข และอักษรพิเศษ"
    );

export const confirmPasswordValidator = yup
    .string()
    .required("กรุณายืนยันรหัสผ่าน")
    .oneOf([yup.ref("password")], "ยืนยันรหัสผ่านไม่ถูกต้อง")

export const usernameValidator = yup
    .string()
    .required("กรุณากรอกชื่อผู้ใช้")
    .max(32, "ควรไม่เกิน 32 ตัวอักษร")

export const oldPasswordValidator = yup
    .string()
    .required("กรุณากรอกรหัสผ่านเดิม")