import { FaPlusCircle } from "react-icons/fa";
import { useState } from "react";
import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import Challenge from "../../../components/Challenge";
import Input from "../../../components/Input/Input";
import Select from "../../../components/Select/Select";

function validateSelect(value) {
  if (value === "Ingredient") {
    return "Please select an ingredient";
  }
  return null;
}

function validateInput(value) {
  if (value === "" || isNaN(value)) {
    return "Please enter a number";
  }
  return null;
}

const foodList = [
  "Ingredient",
  "Pepperoni",
  "Tomato",
  "Wheat",
  "Onion",
  "Bacon",
  "Lettuce",
  "Cheese",
  "Avocado",
  "Potato",
  "Sugar",
  "Ham",
  "Chicken",
];

const Recipe = () => {
  const [cards, setCards] = useState([]);
  const [inputError, setInputError] = useState(null);
  const [selectError, setSelectError] = useState(null);

  const addCard = (weight, ingredient) => {
    const classesList = [
      "recipe__card--primary",
      "recipe__card--secondary",
      "recipe__card--highlight",
    ];
    const randomIndex = Math.floor(Math.random() * 3);
    setCards([
      ...cards,
      {
        weight,
        ingredient,
        className: classesList[randomIndex],
      },
    ]);
  };

  const handleInputBlur = (e) => {
    const error = validateInput(e.target.value);
    setInputError(error);
  };

  const handleSelectChange = () => {
    setSelectError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputError = validateInput(e.target[0].value);
    const selectError = validateSelect(e.target[1].value);
    setInputError(inputError);
    setSelectError(selectError);
    if (!inputError && !selectError) {
      addCard(e.target[0].value, e.target[1].value);
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
            defaultValue="Ingredient"
          >
            {foodList.map((food) => (
              <option value={food}>{food}</option>
            ))}
          </Select>
          <Button className="recipe__button">
            <FaPlusCircle className="recipe__icon--faPlusCircle" />
          </Button>
        </form>
        <div className="recipe__wrapper">
          {cards.map((card) => {
            return (
              <Card className={`recipe__card ${card.className}`}>
                <strong className="recipe__weight">{card.weight} gr</strong>-
                <span className="recipe__ingredient">{card.ingredient}</span>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
