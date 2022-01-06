import Challenge from "../../../components/Challenge";
import Button from "../../../components/Button";
import Title from "../../../components/Title";

const Sum = () => {
  return (
    <div>
      <Challenge title="Sum Numbers">
        Increment the numbers by clicking in the buttons. The result of the sum
        will be displayed.
      </Challenge>
      <div className="sum__operation">
        <Button className="sum__element">0</Button>
        <span className="sum__element">+</span>
        <Button className="sum__element">0</Button>
        <span className="sum__element">=</span>
        <Title>0</Title>
      </div>
    </div>
  );
};

export default Sum;
