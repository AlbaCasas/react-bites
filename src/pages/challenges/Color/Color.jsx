import { useState } from "react/cjs/react.development";
import Challenge from "../../../components/Challenge";
import Input from "../../../components/Input";

function getColor(input) {
  if (input === "red") {
    return "color__box--red";
  }
  if (input === "blue") {
    return "color__box--blue";
  }
  if (input === "green") {
    return "color__box--green";
  }
  return null;
}

function getError(input) {
  if (!input || input === "red" || input === "green" || input === "blue") {
    return null;
  }
  return "Enter red, green or blue";
}

const Color = () => {
  const [input, setInput] = useState(null);

  return (
    <div>
      <Challenge title="Type a color">
        Write a “red”, “green” or “blue” in the input. The box will change its
        background correspondingly <u>when you click outside the input</u>. If
        you write an invalid color, the input will show the helper text: “Enter
        red, green or blue”
      </Challenge>
      <form
        className="color__solution"
        onSubmit={(e) => {
          e.preventDefault();
          setInput(e.target[0].value);
        }}
      >
        <Input
          onBlur={(e) => {
            setInput(e.target.value);
          }}
          error={getError(input)}
          placeholder="Write red, green or blue"
        />
        <div className={`color__box ${getColor(input)}`} />
      </form>
    </div>
  );
};

export default Color;
