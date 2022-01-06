const Title = ({ children, className = "", onClick }) => {
  return (
    <div>
      <h1 onClick={onClick} className={`title ${className}`}>
        {children}
      </h1>
    </div>
  );
};

export default Title;
