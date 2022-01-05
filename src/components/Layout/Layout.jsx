import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="layout__header">
        <h1 className="layout__title">React Challenges</h1>
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
            <FaLinkedin className="layout__icon" />
          </a>
        </div>
      </header>
      <main className="layout__main">{children}</main>
    </div>
  );
};

export default Layout;
