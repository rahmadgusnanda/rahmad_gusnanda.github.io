const Button = (props) => {
  const { children, bg, textsize } = props;
  return (
    <button
      className={`h-9 px-2 rounded-sm ${bg} ${textsize} text-black mx-1 justify-center items-center `}
    >
      {children}
    </button>
  );
};

export default Button;
