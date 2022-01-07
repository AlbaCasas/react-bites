import Challenge from "../../../components/Challenge";

const Color = () => {
  return (
    <Challenge title="Type a color">
      Write a “red”, “green” or “blue” in the input. The box will change its
      background correspondingly. If you write an invalid color, the input will
      show the helper text: “Incorrect color”
    </Challenge>
  );
};

export default Color;
