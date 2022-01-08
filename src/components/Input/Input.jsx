const Input = ({ placeholder, testId = "", error, onBlur }) => {
  return (
    <div>
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
