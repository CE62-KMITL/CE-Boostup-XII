import React from 'react';

interface ColorSelectorProps {
  selectedColor: string | null;
  onColorChange: (color: string) => void;
}

const LanguageDropdown: React.FC<ColorSelectorProps> = ({ selectedColor, onColorChange }) => {
  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onColorChange(event.target.value);
  };

  return (
    <select className="rounded-2" value={selectedColor || "1"} onChange={handleColorChange}>
      <option className="rounded-2 mt-2" value="1">C</option>
      <option className="rounded-2 mt-2" value="2">C++</option>
    </select>
  );
};

export default LanguageDropdown;