import { useState } from "react";
import TitleLine from "../../../components/TitleLine/TitleLine";
import Button from "../../../components/Button";

const Likes = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <TitleLine className="likes__title">Likes</TitleLine>
      <p className="likes__text">
        Increment the number of likes by clicking on the button.
      </p>
      <Button onClick={handleClick}>{counter} Likes</Button>
    </div>
  );
};

export default Likes;
