const Input = ({ placeholder, className = "", error }) => {
  return (
    <div>
      <input
        className={`input ${error ? "input--error" : ""}`}
        placeholder={placeholder}
      />
      <p className="text--error">{error}</p>
    </div>
  );
};
export default Input;
