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

export default function InputPlain({ label, inputClass, labelClass, pClass, subtext, type, func, ...props }: InputProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const labelRef = useRef<HTMLLabelElement>(null);
    const pRef = useRef<HTMLParagraphElement>(null);
    inputClass = inputClass + " resize-none py-2"
    return (
        <div className="flex flex-col">
            <label className={labelClass} ref={labelRef}>{label}</label>
            <p className={pClass} ref={pRef}>{subtext}</p>
            {type === "textarea" ? (
                <textarea className={inputClass} name="" id="" cols={30} rows={10}></textarea>
            ) : (
                <input {...props} autoComplete="new-password" type={type} className={inputClass} ref={inputRef} onChange={(e) => { handleValid(inputRef, labelRef); func(e) }} />
            )}
        </div>
    );
}