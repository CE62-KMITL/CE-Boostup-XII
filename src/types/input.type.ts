export default interface InputProps {
    label: string;
    type: string;
    placeholder?: string;
    required?: boolean;
    inputClass: string;
    labelClass: string;
    showErrorLabel?: boolean;
    value?: string;
    error?: boolean;
    errorMessage?: string | null;
    fixPosition?: boolean;
    isEditabled?: boolean;
    onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
}