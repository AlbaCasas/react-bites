const Select = ({ children, className = "", name, value, onChange }) => {
  return (
    <select className={className} name={name} value={value} onChange={onChange}>
      {children}
    </select>
  );
};

export default Select;
