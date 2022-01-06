import Challenge from "../../../components/Challenge";
import Button from "../../../components/Button";
import Title from "../../../components/Title";
import { useState } from "react";

const Sum = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const result = counter + counter2;

  return (
    <div>
      <Challenge title="Sum Numbers">
        Increment the numbers by clicking in the buttons. The result of the sum
        will be displayed.
      </Challenge>
      <div className="sum__operation">
        <Button
          onClick={() => {
            setCounter(counter + 1);
          }}
          className="sum__element"
        >
          {counter}
        </Button>
        <span className="sum__element sum__element--symbol">+</span>
        <Button
          onClick={() => {
            setCounter2(counter2 + 1);
          }}
          className="sum__element"
        >
          {counter2}
        </Button>
        <span className="sum__element sum__element--symbol">=</span>
        <Title>{result}</Title>
      </div>
    </div>
  );
};

export default Sum;
