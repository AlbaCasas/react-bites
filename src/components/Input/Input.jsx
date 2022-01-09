const Input = ({
  placeholder,
  testId = "",
  error,
  onBlur,
  className = "",
  onClick,
}) => {
  return (
    <div className={`input-box ${className}`}>
      <input
        className={`input-box__input ${error ? "input-box__input--error" : ""}`}
        placeholder={placeholder}
        onBlur={onBlur}
        data-testid={testId}
      />
      {error && <p className="input-box__text ">{error}</p>}
    </div>
  );
};
export default Input;
