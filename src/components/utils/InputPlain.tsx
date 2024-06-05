import { useRef } from "react";

type InputProps = {
    label: string;
    type: string;
    placeholder: string;
    required?: boolean;
    inputClass: string;
    labelClass: string;
    pClass: string;
    subtext: string;
    func: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputPlain({ label, inputClass, labelClass, pClass, subtext, func, ...props }: InputProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const labelRef = useRef<HTMLLabelElement>(null);
    const pRef = useRef<HTMLParagraphElement>(null);

    // function handleValid(inputRef: React.RefObject<HTMLInputElement>, labelRef: React.RefObject<HTMLLabelElement>) {
    //     const current = inputRef.current as HTMLInputElement;
    //     const parent = labelRef.current as HTMLLabelElement;
    //     if (current && parent) {
    //         if (current.value.length > 0)
    //             parent.style.animationName = "label-animation";
    //         else if (current.value.length === 0)
    //             parent.style.animationName = "reverse-label-animation";
    //         parent.style.animationDuration = "0.3s";
    //         parent.style.animationTimingFunction = "ease-in-out";
    //         parent.style.animationFillMode = "forwards";
    //     }
    // }

    return (
        <div className="flex flex-col">
            <label className={labelClass} ref={labelRef}>{label}</label>
            <p className={pClass} ref={pRef}>{subtext}</p>
            <input {...props} autoComplete="new-password" className={inputClass} ref={inputRef} onChange={(e) => { handleValid(inputRef, labelRef); func(e) }} />
        </div>
    );
}