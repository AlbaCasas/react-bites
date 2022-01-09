import { FaPlusCircle } from "react-icons/fa";
import { useState } from "react/cjs/react.development";
import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import Challenge from "../../../components/Challenge";
import Input from "../../../components/Input/Input";
import Select from "../../../components/Select/Select";

function getError(input) {
  if (!isNaN(input)) {
    return null;
  }
  return "Enter a number";
}
const Recipe = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <Challenge title="Recipe">
        Select an ingredient, write the quantity in grams and submit. The
        ingredients will be added to the recipe below.
      </Challenge>
      <div className="recipe__result">
        <form
          className="recipe__form"
          onSubmit={(e) => {
            e.preventDefault();
            setInput(e.target[0].value);
          }}
        >
          <Input
            onBlur={(e) => {
              setInput(e.target.value);
            }}
            className="recipe__input"
            placeholder="Weight (grs.)"
            error={getError(input)}
          />
          <Select
            className="recipe__select"
            error="Please select an ingredient"
          >
            <option disabled selected>
              Ingredient
            </option>
            <option value="pepperoni">Pepperoni</option>
            <option value="tomato">Tomato</option>
            <option value="wheat">Wheat</option>
            <option value="onion">Onion</option>
            <option value="bacon">Bacon</option>
            <option value="chesse">Chesse</option>
            <option value="lettuce">Lettuce</option>
            <option value="avocado">Avocado</option>
            <option value="potato">potato</option>
            <option value="sugar">sugar</option>
            <option value="ham">Ham</option>
            <option value="chicken">Chicken</option>
          </Select>
          <Button className="recipe__button">
            <FaPlusCircle className="recipe__icon--faPlusCircle" />
          </Button>
        </form>
        <div className="recipe__wrapper"></div>
      </div>
    </div>
  );
};

export default Recipe;
