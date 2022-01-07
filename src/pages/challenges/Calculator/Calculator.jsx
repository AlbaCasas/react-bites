import { useState } from "react";
import Button from "../../../components/Button";
import Challenge from "../../../components/Challenge";
import Select from "../../../components/Select";
import Title from "../../../components/Title";

function calculate(num1, num2, operator) {
  switch (operator) {
    case "plus":
      return num1 + num2;
    case "minus":
      return num1 - num2;
    case "multiplication":
      return num1 * num2;
    case "division":
      return Math.round((num1 / num2) * 10) / 10;
    default:
      return 0;
  }
}

const Calculator = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [operation, setOperation] = useState("plus");

  const result = calculate(counter, counter2, operation);

  return (
    <div>
      <Challenge title="Button Calculator">
        Select an operation by using the dropdown. Increment the numbers by
        clicking on the buttons. The result of the operation will be displayed.
      </Challenge>
      <div className="calculator__operation">
        <Button
          className="calculator__button"
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          {counter}
        </Button>
        <Select
          className="calculator__select"
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
        </Select>
        <Button
          className="calculator__button"
          onClick={() => {
            setCounter2(counter2 + 1);
          }}
        >
          {counter2}
        </Button>
        <span className="calculator__equals">=</span>
        <Title>{result}</Title>
      </div>
    </div>
  );
};

export default Calculator;
