const Input = ({ placeholder, className = "", error, onBlur }) => {
  return (
    <div>
      <input
        className={`input ${error ? "input--error" : ""}`}
        placeholder={placeholder}
        onBlur={onBlur}
      />
      <p className="text--error">{error}</p>
    </div>
  );
};
export default Input;
