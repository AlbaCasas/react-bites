import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft, FaGithub, FaLinkedin } from "react-icons/fa";
import Title from "../Title";

const HOME_ROUTE = "/";
const Layout = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const shouldShowBackButton = pathname !== HOME_ROUTE;
  const handleTitleClick = () => navigate(HOME_ROUTE);
  return (
    <div className="layout">
      <header className="layout__header">
        <Title className="layout__title" onClick={handleTitleClick}>
          🚀 React Challenges
        </Title>
        <div className="layout__icons">
          <a
            href="https://github.com/AlbaCasas"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="layout__icon layout__icon--github" />
          </a>
          <a
            href="https://www.linkedin.com/in/alba-casas/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="layout__icon layout__icon--linkedin" />
          </a>
        </div>
      </header>
      <main className="layout__main">
        {shouldShowBackButton && (
          <FaArrowLeft
            className="layout__icon layout__icon--back"
            onClick={() => navigate(HOME_ROUTE)}
          />
        )}
        {children}
      </main>
    </div>
  );
};

export default Layout;
