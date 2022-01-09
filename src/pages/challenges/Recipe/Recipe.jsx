import { FaPlusCircle } from "react-icons/fa";
import Button from "../../../components/Button/Button";
import Challenge from "../../../components/Challenge";
import Input from "../../../components/Input/Input";
import Select from "../../../components/Select/Select";

const Recipe = () => {
  return (
    <div>
      <Challenge title="Recipe">
        Select an ingredient, write the quantity in grams and submit. The
        ingredients will be added to the recipe below.
      </Challenge>
      <div className="recipe__result">
        <form className="recipe__form">
          <Input
            className="recipe__input"
            placeholder="Weight (grs.)"
            error="Enter a number"
          />
          <Select
            className="recipe__select"
            error="Please select an ingredient"
          >
            <option disabled selected>
              Ingredient
            </option>
          </Select>
          <Button className="recipe__button">
            <FaPlusCircle className="recipe__icon--faPlusCircle" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Recipe;
