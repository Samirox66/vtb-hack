import { useState } from "react";
import "./BranchInput.css";

const BranchInput = () => {
  const [value, setValue] = useState("");
  return (
    <input
      className="branch-input"
      placeholder="Введите адрес"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};

export default BranchInput;
