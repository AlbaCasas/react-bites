import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft, FaGithub, FaLinkedin } from "react-icons/fa";
import Title from "../Title";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const shouldShowBackButton = pathname !== "/";

  return (
    <div className="layout">
      <header className="layout__header">
        <Title className="layout__title" onClick={() => navigate("/")}>
          🚀 React Challenges
        </Title>
        <div className="layout__icons">
          <a
            className="layout__icon layout__icon--github clickable"
            href="https://github.com/AlbaCasas"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="layout__icon layout__icon--linkedin clickable"
            href="https://www.linkedin.com/in/alba-casas/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </header>
      <main className="layout__main">
        {shouldShowBackButton && (
          <FaArrowLeft
            className="layout__icon layout__icon--back clickable"
            onClick={() => navigate("/")}
          />
        )}
        {children}
      </main>
    </div>
  );
};

export default Layout;
