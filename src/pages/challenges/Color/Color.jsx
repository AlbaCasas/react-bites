import Challenge from "../../../components/Challenge";
import Input from "../../../components/Input";

const Color = () => {
  return (
    <div>
      <Challenge title="Type a color">
        Write a “red”, “green” or “blue” in the input. The box will change its
        background correspondingly. If you write an invalid color, the input
        will show the helper text: “Incorrect color”
      </Challenge>
      <div className="color__solution">
        <Input
          error="Enter red, green or blue"
          placeholder="Write red, green or blue"
        />
        <div className="color__box" />
      </div>
    </div>
  );
};

export default Color;
