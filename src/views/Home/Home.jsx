import TitleLine from "../../components/TitleLine/TitleLine";

const Home = () => {
  return (
    <div>
      <TitleLine className="likes__title">Home</TitleLine>
      <p className="likes__text">
        👋 Hello! I'm Alba Casas. This is a list of React challenges I have
        completed so far:
      </p>
      <li className="home__list">
        <a
          className="home__links"
          href="http://localhost:3000/likes"
          target="_blank"
          rel="noreferrer"
        >
          Likes counter
        </a>
      </li>
    </div>
  );
};

export default Home;
