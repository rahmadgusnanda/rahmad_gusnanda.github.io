import React, { useState } from "react";

const GenderSelection = () => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <div className="flex flex-col space-y-1 mt-6 mb-2">
      <h2 className="text-md ">Jenis Kelamin</h2>
      <label className="flex items-center space-x-2">
        <input
          type="radio"
          value="Laki-laki"
          checked={selectedGender === "Laki-laki"}
          onChange={() => handleGenderChange("Laki-laki")}
          className="form-radio text-blue-500"
        />
        <span>Laki-laki</span>
      </label>
      <label className="flex items-center space-x-2">
        <input
          type="radio"
          value="Perempuan"
          checked={selectedGender === "Perempuan"}
          onChange={() => handleGenderChange("Perempuan")}
          className="form-radio text-pink-500"
        />
        <span>Perempuan</span>
      </label>
    </div>
  );
};

export default GenderSelection;
