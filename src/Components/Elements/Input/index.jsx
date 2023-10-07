import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { label, type, placeholder, value } = props;
  return (
    <div className="mb-6">
      <Label>{label}</Label>
      <Input type={type} placeholder={placeholder} value={value} />
    </div>
  );
};

export default InputForm;
