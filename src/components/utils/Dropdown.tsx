import React from 'react';

interface ColorSelectorProps {
  selectedColor: string | null;
  onColorChange: (color: string) => void;
}

const Dropdown: React.FC<ColorSelectorProps> = ({ selectedColor, onColorChange }) => {
  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onColorChange(event.target.value);
  };

  return (
    <select value={selectedColor || ""} onChange={handleColorChange}>
      <option value="">Select a color</option>
      <option value="1">Red</option>
      <option value="2">Blue</option>
      <option value="3">Yellow</option>
      <option value="4">Green</option>
      <option value="5">Purple</option>
      <option value="6">Orange</option>
    </select>
  );
};

export default Dropdown;