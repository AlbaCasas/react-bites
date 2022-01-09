import { FaPlusCircle } from "react-icons/fa";
import { useState } from "react";
import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import Challenge from "../../../components/Challenge";
import Input from "../../../components/Input/Input";
import Select from "../../../components/Select/Select";

const Recipe = () => {
  const [inputError, setInputError] = useState(null);
  const [selectError, setSelectError] = useState(null);

  const handleInputBlur = (e) => {
    if (isNaN(e.target.value)) {
      setInputError("Enter a number");
    } else {
      setInputError(null);
    }
  };

  const handleSelectChange = () => {
    setSelectError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value === "") {
      setInputError("Enter a number");
    }
    if (e.target[1].value === "Ingredient") {
      setSelectError("Select one ingredient");
    } else {
      setSelectError(null);
    }
  };

  return (
    <div>
      <Challenge title="Recipe">
        Select an ingredient, write the quantity in grams and submit. The
        ingredients will be added to the recipe below.
      </Challenge>
      <div className="recipe__result">
        <form className="recipe__form" onSubmit={handleSubmit}>
          <Input
            onBlur={handleInputBlur}
            error={inputError}
            className="recipe__input"
            placeholder="Weight (grs.)"
          />
          <Select
            className="recipe__select"
            onChange={handleSelectChange}
            error={selectError}
          >
            <option selected>Ingredient</option>
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
