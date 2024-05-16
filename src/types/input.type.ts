export default interface InputProps {
    label: string;
    type: string;
    placeholder: string;
    required?: boolean;
    inputClass: string;
    labelClass: string;
    showErrorLabel?: boolean;
    error?: boolean;
    errorMessage?: string | null;
    onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
}