const Input = ({ placeholder, testId = "", error, onBlur, className = "" }) => {
  return (
    <div className={className}>
      <input
        className={`input ${error ? "input--error" : ""}`}
        placeholder={placeholder}
        onBlur={onBlur}
        data-testid={testId}
      />
      <p className="text--error">{error}</p>
    </div>
  );
};
export default Input;
