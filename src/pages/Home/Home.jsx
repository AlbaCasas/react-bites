import { useNavigate } from "react-router-dom";
import TitleLine from "../../components/TitleLine/TitleLine";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <TitleLine className="home__title">Home</TitleLine>
      <p className="home__text">
        👋 Hello! I'm <span className="color-highlight">Alba Casas</span>. I
        have been lerning <span className="color-highlight">ReactJS</span> for
        the last few months. <br />
        <br />
        Learning react is not easy, so I'm sharing this list of{" "}
        <span className="color-highlight">challenges</span> that have helped me
        along the way:
      </p>
      <ul>
        <li onClick={() => navigate("/likes")} className="home__link">
          Likes Counter
        </li>
        <li onClick={() => navigate("/sum")} className="home__link">
          Sum Numbers
        </li>
        <li onClick={() => navigate("/calculator")} className="home__link">
          Button Calculator
        </li>
        <li onClick={() => navigate("/color")} className="home__link">
          Type a Color
        </li>
      </ul>
    </div>
  );
};

export default Home;
