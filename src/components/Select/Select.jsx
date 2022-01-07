const Select = ({ children, className = "", name, value, onChange }) => {
  return (
    <select
      className={`select ${className}`}
      name={name}
      value={value}
      onChange={onChange}
    >
      {children}
    </select>
  );
};

export default Select;
