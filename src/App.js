import "./App.scss";
import React from "react";
import Home from "./Pages/Home";
import CreateSalad from "./Pages/CreateSalad";
import AddIngredient from "./Pages/AddIngredient";
import Ingredients from "./Pages/Ingredients";
import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

export const saladContext = React.createContext({});
export const ingredientContext = React.createContext({});

function App() {
  const [salad, setSalad] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const { Provider: SaladProvider } = saladContext;
  const { Provider: IngredientProvider } = ingredientContext;

  useEffect(() => {
    fetch("https://60883ab2a6f4a30017425ff2.mockapi.io/salads")
      .then((response) => response.json())
      .then((data) => setSalad(data));
  }, []);

  useEffect(() => {
    fetch("https://60883ab2a6f4a30017425ff2.mockapi.io/ingredients")
      .then((response) => response.json())
      .then((data) => setIngredients(data));
  }, []);

  return (
    <div className="App">
      <Switch>
        <SaladProvider value={{ salad, setSalad }}>
          <IngredientProvider value={{ ingredients, setIngredients }}>
            <Route exact path="/" component={Home}></Route>
            <Route path="/create_salad" component={CreateSalad}></Route>
            <Route path="/ingredients" component={Ingredients}></Route>
            <Route path="/add_ingredient" component={AddIngredient}></Route>
          </IngredientProvider>
        </SaladProvider>
      </Switch>
    </div>
  );
}

export default App;
