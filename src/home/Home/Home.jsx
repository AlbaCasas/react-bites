import { useNavigate } from "react-router-dom";
import Layout from "../../commons/components/Layout/Layout";
import TitleLine from "../../commons/components/TitleLine/TitleLine";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Layout>
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
    </Layout>
  );
};

export default Home;
