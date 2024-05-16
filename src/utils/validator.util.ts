import * as yup from "yup";

const emailValidator = yup.
string()
.email("อีเมลไม่ถูกต้อง")
.required("กรุณากรอกอีเมล");

const passwordValidator = yup
.string()
.min(8, "มีทั้งหมด 8 ตัวอักษรขึ้นไป")
.required("กรุณากรอกรหัสผ่าน")
.matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/,
    "ประกอบด้วยตัวพิมพ์ใหญ่, ตัวพิมพ์เล็ก, ตัวเลข และอักษรพิเศษ"
);

const confirmPasswordValidator = yup
.string()
.oneOf([yup.ref("password")], "ยืนยันรหัสผ่านไม่ถูกต้อง")

const usernameValidator = yup
.string()
.max(10, "ควรไม่เกิน 10 ตัวอักษร")

export { emailValidator, passwordValidator, confirmPasswordValidator, usernameValidator }