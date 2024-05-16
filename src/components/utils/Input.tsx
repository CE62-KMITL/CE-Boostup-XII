import { useRef, useState } from "react";
import EyeIcon from "./EyeIcon";
import InputProps from "../../types/input.type";

export default function Input({ label, type, inputClass, labelClass, onChange, error,...props }: InputProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const labelRef = useRef<HTMLLabelElement>(null);
    const [eyeIcon, setEyeIcon] = useState<boolean>(false);

    function handleValid(inputRef: React.RefObject<HTMLInputElement>, labelRef: React.RefObject<HTMLLabelElement>) {
        const current = inputRef.current as HTMLInputElement;
        const parent = labelRef.current as HTMLLabelElement;
        if (current && parent) {
            if (current.value.length > 0)
                parent.style.animationName = "label-animation";
            else if (current.value.length === 0)
                parent.style.animationName = "reverse-label-animation";
            parent.style.animationDuration = "0.2s";
            parent.style.animationTimingFunction = "ease-in-out";
            parent.style.animationFillMode = "forwards";
        }
    }

    return (
        console.log(`${inputClass} ${error ? "text-red-600" : "text-stone04"}`),
        <>
            <input {...props} type={type === "password" ? eyeIcon ? "text" : "password" : type} placeholder={props.placeholder} autoComplete="new-password" className={`${inputClass} ${error ? "text-red-600" : "text-stone04"}`} ref={inputRef} onChange={(e) => { handleValid(inputRef, labelRef); onChange(e) }} />
            <label className={labelClass + " flex"} ref={labelRef}>
                {label}
                {error &&
                 <p className="text-red-600 text-[14px] font-[500] bottom-[-20px] self-center ml-3">{props.errorMessage}</p>
                }
            </label>
            {type === "password" && <EyeIcon setPasswordAppearance={setEyeIcon} passwordAppearance={eyeIcon} />}
        </>
    );
}