import React, { useState } from "react";

const ComboBox = () => {
  const options = [
    { value: "Teknik Komputer", label: "Teknik Komputer" },
    { value: "Komputerisasi Akuntansi", label: "Komputerisasi Akuntansi" },
    { value: "Keuangan Perbankan", label: "Keuangan Perbankan" },
    { value: "Administrasi Perkantoran", label: "Administrasi Perkantoran" },
  ];

  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex items-center mt-9 mb-16 md:-mt-7 lg:mt-9">
      <label htmlFor="combo-box" className="mr-2">
        Pilih Jurusan :
      </label>
      <select
        id="combo-box"
        className="border rounded p-1"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ComboBox;
