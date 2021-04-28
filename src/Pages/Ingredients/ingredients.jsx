import "./ingredients.scss";
import Ingredient from "../../Components/Ingredient";
import { ingredientContext } from "../../App";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Ingredients = () => {
  const { ingredients, setIngredients } = useContext(ingredientContext);
  const [inputValue, setInputValue] = useState("");

  let filteredData = ingredients.filter((e) =>
    e.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  return (
    <div className="Ingredients">
      <div className="ingredientsHeader">
        <div className="input">
          <p>Search:</p>
          <input
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
          ></input>
        </div>
        <Link to="/add_ingredient" className="addIngredientButton">
          Add Ingredient
        </Link>
      </div>
      {filteredData.map((e) => {
        return <Ingredient ingredient={e}></Ingredient>;
      })}
    </div>
  );
};

export default Ingredients;
