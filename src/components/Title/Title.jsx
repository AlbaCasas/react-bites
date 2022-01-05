const Title = ({ children, className }) => {
  return (
    <div>
      <h1 className={`title ${className}`}>{children}</h1>
    </div>
  );
};

export default Title;
