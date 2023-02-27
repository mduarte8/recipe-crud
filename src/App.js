import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // console.log(
  //   "object.keys are",
  //   Object.keys(recipes[0]).map(
  //     (key) => key.charAt(0).toUpperCase() + key.slice(1)
  //   )
  // );
  // const headers = Object.keys(recipes[0]).map(
  //   (key) => key.charAt(0).toUpperCase() + key.slice(1)
  // );

  const [recipeHeaders, setRecipeHeaders] = useState([
    "Name",
    "Cuisine",
    "Photo",
    "Ingredients",
    "Preparation",
  ]);

  const addRecipe = (newRecipe) => {
    // console.log("new recipe is", newRecipe);
    setRecipes([...recipes, newRecipe]);
  };

  const deleteRecipe = (recipeIndexToDelete) => {
    // console.log("recipeIndexToDelete is", recipeIndexToDelete);
    setRecipes((currentRecipes) => {
      // console.log("current recipes is", currentRecipes);
      // console.log("recipes in delete recipes is", recipes);
      return currentRecipes.filter((recipeIGNORED, index) => {
        return index !== parseInt(recipeIndexToDelete);
      });
    });
  };

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList
        recipeHeaders={recipeHeaders}
        recipes={recipes}
        deleteRecipe={deleteRecipe}
      />
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
}

export default App;
