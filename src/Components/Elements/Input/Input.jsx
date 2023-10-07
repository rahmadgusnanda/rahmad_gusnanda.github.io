const Input = (props) => {
  const { type, placeholder, value } = props;
  return (
    <input
      type={type}
      className="text-sm border border-slate-600 rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
