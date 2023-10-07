const Label = (props) => {
  const { children } = props;
  return <label className="block text-sm mt-5 py-3">{children}</label>;
};

export default Label;
