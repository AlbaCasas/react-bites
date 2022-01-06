import Title from "../Title";
import Line from "../Line";

const TitleLine = ({ children, className = "" }) => {
  return (
    <div className={`title-line ${className}`}>
      <Title className="title-line__title">{children}</Title>
      <Line className="title-line__line" />
    </div>
  );
};

export default TitleLine;
