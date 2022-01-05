import TitleLine from "../../components/TitleLine/TitleLine";
import Button from "../../components/Button";

const Likes = () => {
  return (
    <div>
      <TitleLine className="likes__title">Likes</TitleLine>
      <p className="likes__text">
        Increment the number of likes by clicking on the button.
      </p>
      <Button>0 likes</Button>
    </div>
  );
};

export default Likes;
