import { useState } from "react";
import Button from "../../../components/Button";
import Challenge from "../../../components/Challenge";

const Likes = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <Challenge title="Likes">
        Increment the number of likes clicking in the button
      </Challenge>
      <Button onClick={handleClick}>{counter} Likes</Button>
    </div>
  );
};

export default Likes;
