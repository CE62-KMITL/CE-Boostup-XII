import { useRef, useState } from "react";
import EyeIcon from "./EyeIcon";

type InputProps = {
    label: string;
    type: string;
    placeholder: string;
    required?: boolean;
    inputClass: string;
    labelClass: string;
    func: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ label, type, inputClass, labelClass, func, ...props }: InputProps) {
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
        <>
            <input {...props} type={type === "password" ? eyeIcon ? "text" : "password" : type} placeholder={props.placeholder} autoComplete="new-password" className={inputClass} ref={inputRef} onChange={(e) => { handleValid(inputRef, labelRef); func(e) }} />
            <label className={labelClass} ref={labelRef}>{label}</label>
            {type === "password" && <EyeIcon setPasswordAppearance={setEyeIcon} passwordAppearance={eyeIcon} />}
        </>
    );
}