import TitleLine from "../TitleLine";

const Challenge = ({ children, title }) => {
  return (
    <div className="challenge">
      <TitleLine className="challenge__title">{title}</TitleLine>
      <p className="challenge__text">{children}</p>
    </div>
  );
};

export default Challenge;
