import { useState } from "react";
import TitleLine from "../../commons/components/TitleLine";
import Button from "../../commons/components/Button";
import LayoutChallenge from "../components/LayoutChallenge";

const Likes = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter + 1);
  };
  return (
    <LayoutChallenge>
      <TitleLine className="likes__title">Likes</TitleLine>
      <p className="likes__text">
        Increment the number of likes by clicking on the button.
      </p>
      <Button onClick={handleClick}>{counter} Likes</Button>
    </LayoutChallenge>
  );
};

export default Likes;
