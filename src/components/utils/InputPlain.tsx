type InputProps = {
    label: string;
    type: string;
    placeholder: string;
    required?: boolean;
    inputClass: string;
    labelClass: string;
    pClass: string;
    subtext: string;
    error?: boolean;
    func?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function InputPlain({ label, inputClass, labelClass, pClass, subtext, type, func, error,...props }: InputProps) {
    inputClass = inputClass + " resize-none py-2"

    return (
        <div className="flex flex-col">
            <label className={`${labelClass} ${error ? "text-red-600": "text-stone04"}`}>{label}</label>
            <p className={pClass}>{subtext}</p>
            {type === "textarea" ? (
                <textarea className={`${inputClass} ${error ? "border-red-600 border-2": "border-stone03"}`} onChange={(e) => func && func(e)} cols={30} rows={10}></textarea>
            ) : (
                <input {...props} autoComplete="new-password" type={type} className={`${inputClass} border-[1px] ${error ? "border-red-600": "border-stone03"}`} onChange={(e) => func && func(e) } />
            )}
        </div>
    );
}