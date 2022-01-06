import { useState } from "react";
import Button from "../../../components/Button";
import Challenge from "../../../components/Challenge";
import Title from "../../../components/Title";

function getOperation(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  }
  return num1 / num2;
}
console.log(getOperation());
const Calculator = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const [operation, setOperation] = useState("plus");

  return (
    <div>
      <Challenge title="Simple Calculator">
        Select an operation by using the dropdown. Increment the numbers by
        clicking on the buttons. The result of the operation will be displayed.
      </Challenge>
      <div>
        <Button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          {counter}
        </Button>
        <select
          name="operator"
          value={operation}
          onChange={(e) => {
            setOperation(e.target.value);
          }}
        >
          <option value="plus">+</option>
          <option value="minus">-</option>
          <option value="multiplication">*</option>
          <option value="division">÷</option>
        </select>
        <Button
          onClick={() => {
            setCounter2(counter2 + 1);
          }}
        >
          {counter2}
        </Button>
        <span>=</span>
        <Title></Title>
      </div>
    </div>
  );
};

export default Calculator;
