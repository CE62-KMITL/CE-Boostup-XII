import { useState } from "react";
import { ProblemTagModelResponse } from "../../types/response.type";

type DropdownProps = {
  type: number;
  values: string[][];
  onChange: (value: string) => void;
};

function Dropdown({ values, type, onChange }: DropdownProps) {
  const [statusRotation, setStatusRotation] = useState(false);
  const handleStatusSelectClick = () => {
    setStatusRotation(!statusRotation);
  };
  const onBLurStatusSelect = () => {
    setStatusRotation(false);
  }

  if (type == 2) {
    return (
      <div className="test">
        <div className="relative w-36 h-10 shadow-md rounded-lg before:flex before:justify-center before:items-center before:absolute before:right-0 before:-top-0 before:w-10 before:h-10 before:rounded-lg before:bg-cream before:pointer-events-none">
          <svg
            className={`pointer-events-none absolute right-3 top-3 w-4 h-4 transition-all duration-200 ${statusRotation ? "rotate-180" : ""
              }`}
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L7 7L13 1"
              stroke="#212429"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <select
            className="hover:cursor-pointer flex w-full h-full rounded-lg pl-3 focus:outline-none"
            name="lesson"
            id="lesson"
            onClick={handleStatusSelectClick}
            onBlur={onBLurStatusSelect}
            onChange={(e) => onChange(e.target.value)}
          >
            {values.map(([id, text]) => (
              <option key={id} value={id}>{text}</option>
            ))}
          </select>
        </div>
      </div>);
  }
  return (
    <div className="test">
      <div className="relative w-28 h-10 shadow-md rounded-lg before:flex before:justify-center before:items-center before:absolute before:right-0 before:-top-0 before:w-10 before:h-10 before:rounded-lg before:bg-cream before:pointer-events-none">
        <svg
          className={`pointer-events-none absolute right-3 top-3 w-4 h-4 transition-all duration-200 ${statusRotation ? "rotate-180" : ""
            }`}
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L7 7L13 1"
            stroke="#212429"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <select
          className="hover:cursor-pointer flex w-full h-full rounded-lg pl-3 focus:outline-none"
          name="lesson"
          id="lesson"
          onClick={handleStatusSelectClick}
          onBlur={onBLurStatusSelect}
          onChange={(e) => onChange(e.target.value)}
        >
          {values.map(([value, text]) => (
            <option key={value} value={value}>{text}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Dropdown;
