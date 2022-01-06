import TitleLine from "../../components/TitleLine/TitleLine";
import Button from "../../components/Button";

const Sum = () => {
  return (
    <div>
      <TitleLine className="likes__title">Likes</TitleLine>
      <p className="likes__text">
        Increment the number of likes by clicking on the button.
      </p>
      <Button></Button>
      <Button></Button>
    </div>
  );
};

export default Sum;
