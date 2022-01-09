const Select = ({ children, className = "", name, value, onChange, error }) => {
  return (
    <div className={`select-box ${className}`}>
      <select
        className={`select-box__selector ${
          error && "select-box__selector--error"
        }`}
        name={name}
        value={value}
        onChange={onChange}
      >
        {children}
      </select>
      {error && <p className="select-box__text text-error">{error}</p>}
    </div>
  );
};

export default Select;
