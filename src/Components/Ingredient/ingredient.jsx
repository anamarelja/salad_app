import "./ingredient.scss";

const Ingredient = (props) => {
  return (
    <div className="Ingredient">
      <img src={props.ingredient.img} alt="" />
      <div className="ingredientName">{props.ingredient.name}</div>
      <div className="ingredientKcal">kCal: {props.ingredient.kCal}</div>
      <div className="ingredientTags">
        {props.ingredient.tags.map((e) => (
          <p>{e}</p>
        ))}
      </div>
    </div>
  );
};

export default Ingredient;
