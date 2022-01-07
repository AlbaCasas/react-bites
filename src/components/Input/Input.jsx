const Input = ({ placeholder, className = "", error }) => {
  return (
    <div>
      <input
        className={error ? `input--error` : `input`}
        placeholder={placeholder}
      />
      <p className="text--error">{error}</p>
    </div>
  );
};
export default Input;
