import { useNavigate } from "react-router-dom";
import TitleLine from "../../components/TitleLine/TitleLine";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <TitleLine className="likes__title">Home</TitleLine>
      <p className="likes__text">
        👋 Hello! I'm Alba Casas. This is a list of React challenges I have
        completed so far:
      </p>
      <ul>
        <li onClick={() => navigate("/likes")} className="home__link">
          Likes counter
        </li>
      </ul>
    </div>
  );
};

export default Home;
